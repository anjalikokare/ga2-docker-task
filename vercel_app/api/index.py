from fastapi import FastAPI, Request, HTTPException, Body, Query, Header, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from authlib.integrations.starlette_client import OAuth
from typing import List, Dict, Optional
import json
import os
import math
import csv
import pandas as pd
import io

app = FastAPI()

# Enable CORS for all
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# Session middleware for Google OAuth
app.add_middleware(SessionMiddleware, secret_key=os.environ.get("SESSION_SECRET", "super-secret-key"))

# Paths for data files
BASE_DIR = os.path.dirname(__file__)
LATENCY_FILE = os.path.join(BASE_DIR, "q-vercel-latency.json")
STUDENTS_FILE = os.path.join(BASE_DIR, "q-fastapi.csv")

# Constants for SecureUpload (Extracted from your environment)
SECURE_UPLOAD_TOKEN_NAME = "x_upload_token_9970"
SECURE_UPLOAD_TOKEN_VALUE = "3g67xlm4rvxgssg6"
SECURE_UPLOAD_MAX_SIZE = 52 * 1024  # 52KB

# --- Google OAuth Setup ---
GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "YOUR_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", "YOUR_CLIENT_SECRET")

oauth = OAuth()
oauth.register(
    name='google',
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'}
)

# --- Data Loaders ---
def load_latency_data():
    try:
        if os.path.exists(LATENCY_FILE):
            with open(LATENCY_FILE, "r") as f:
                return json.load(f)
    except Exception:
        pass
    return []

def load_students_data():
    students = []
    try:
        if os.path.exists(STUDENTS_FILE):
            with open(STUDENTS_FILE, "r", encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    students.append({
                        "studentId": int(row["studentId"]),
                        "class": row["class"]
                    })
    except Exception:
        pass
    return students

# --- Grading Math (Linear Interpolation for p95) ---
def calculate_p95(data):
    sorted_data = sorted(data)
    n = len(sorted_data)
    if n == 0: return 0.0
    i = (n - 1) * 0.95
    s = int(math.floor(i))
    h = i - s
    if s + 1 < n:
        return sorted_data[s] + h * (sorted_data[s+1] - sorted_data[s])
    else:
        return sorted_data[s]

# --- ENDPOINTS ---

# 1. Students Endpoint (GET /api/students)
@app.get("/api/students")
@app.get("/api") # Keep compatibility with existing solution
def get_students(request: Request, class_: Optional[List[str]] = Query(None, alias="class")):
    # Re-loading data to handle fresh files if updated
    data = load_students_data()
    if class_:
        filtered = [s for s in data if s["class"] in class_]
        return {"students": filtered}
    return {"students": data}

# 2. Telemetry/Analytics (POST /api/telemetry)
@app.post("/api/telemetry")
@app.post("/api") # Keep compatibility
async def get_metrics(payload: Dict = Body(...)):
    regions = payload.get("regions", [])
    threshold_ms = float(payload.get("threshold_ms", 180))
    latency_data = load_latency_data()
    
    results = {}
    for region in regions:
        region_rows = [d for d in latency_data if d["region"] == region]
        if not region_rows:
            results[region] = {"avg_latency": 0.0, "p95_latency": 0.0, "avg_uptime": 0.0, "breaches": 0}
            continue
            
        latencies = [float(d["latency_ms"]) for d in region_rows]
        uptimes = [float(d["uptime_pct"]) for d in region_rows]
        
        results[region] = {
            "region": region,
            "avg_latency": round(sum(latencies) / len(latencies), 2),
            "p95_latency": round(calculate_p95(latencies), 2),
            "avg_uptime": round(sum(uptimes) / len(uptimes), 3),
            "breaches": sum(1 for l in latencies if l > threshold_ms)
        }
    return {"regions": results}

@app.get("/localtunnel-email")
def get_localtunnel_email():
    return PlainTextResponse("24f2002015@ds.study.iitm.ac.in")

@app.post("/api/upload")
async def upload_file(
    file: UploadFile = File(...),
    request: Request = None
):
    # Get custom header manually since names can vary in capitalization
    # Re-checking the token name: x_upload_token_9970
    token = request.headers.get(SECURE_UPLOAD_TOKEN_NAME)
    if token != SECURE_UPLOAD_TOKEN_VALUE:
        raise HTTPException(status_code=401, detail="Unauthorized")

    # File type validation
    filename = file.filename
    ext = os.path.splitext(filename)[1].lower() if filename else ""
    if ext not in [".csv", ".json", ".txt"]:
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Content read and size check
    content = await file.read()
    if len(content) > SECURE_UPLOAD_MAX_SIZE:
        raise HTTPException(status_code=413, detail="Payload Too Large")

    if ext == ".csv":
        df = pd.read_csv(io.BytesIO(content))
        category_counts = {str(k): int(v) for k, v in df["category"].value_counts().to_dict().items()}
        return {
            "email": "24f2002015@ds.study.iitm.ac.in",
            "filename": filename,
            "rows": len(df),
            "columns": df.columns.tolist(),
            "totalValue": round(float(df["value"].sum()), 2),
            "categoryCounts": category_counts
        }
    
    return {"email": "24f2002015@ds.study.iitm.ac.in", "filename": filename, "message": "Success"}

# 4. Google OAuth
@app.get("/api/login")
async def login(request: Request):
    # Use the public URL for redirect
    base_url = str(request.base_url).replace("http://", "https://")
    redirect_uri = f"{base_url.rstrip('/')}/api/auth"
    return await oauth.google.authorize_redirect(request, redirect_uri)

@app.get("/api/auth")
async def auth(request: Request):
    token = await oauth.google.authorize_access_token(request)
    request.session['id_token'] = token.get('id_token')
    return RedirectResponse(url='/api/id_token')

@app.get("/api/id_token")
async def get_id_token(request: Request):
    id_token = request.session.get('id_token')
    return {"id_token": id_token, "client_id": GOOGLE_CLIENT_ID}

# Root redirect for convenience
@app.get("/")
def read_root():
    return {"status": "running", "endpoints": ["/api/students", "/api/telemetry", "/api/upload"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
