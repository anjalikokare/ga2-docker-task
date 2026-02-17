from fastapi import FastAPI, UploadFile, File, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
import os

app = FastAPI()

# Enable CORS for all origins and specifically Allow All
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"Incoming request: {request.method} {request.url}")
    response = await call_next(request)
    logger.info(f"Response status: {response.status_code}")
    return response

TOKEN = "3g67xlm4rvxgssg6"
MAX_SIZE = 52 * 1024  # 52KB

@app.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    x_upload_token_9970: str = Header(None)
):
    # 1. Authentication
    if x_upload_token_9970 != TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized")

    # 2. File type validation
    filename = file.filename
    ext = os.path.splitext(filename)[1].lower() if filename else ""
    if ext not in [".csv", ".json", ".txt"]:
        raise HTTPException(status_code=400, detail="Invalid file type")

    # 3. File size validation
    content = await file.read()
    if len(content) > MAX_SIZE:
        raise HTTPException(status_code=413, detail="Payload Too Large")

    # 4. Processing (specifically for CSV)
    if ext == ".csv":
        try:
            # Load CSV using pandas
            df = pd.read_csv(io.BytesIO(content))
            
            # Basic stats
            rows = len(df)
            columns = df.columns.tolist()
            
            # totalValue calculation
            total_value = 0.0
            if "value" in df.columns:
                total_value = float(df["value"].sum())
            
            # categoryCounts calculation
            category_counts = {}
            if "category" in df.columns:
                counts = df["category"].value_counts().to_dict()
                # Convert numpy types to native python types for JSON
                category_counts = {str(k): int(v) for k, v in counts.items()}

            return {
                "email": "24f2002015@ds.study.iitm.ac.in",
                "filename": filename,
                "rows": rows,
                "columns": columns,
                "totalValue": round(total_value, 2),
                "categoryCounts": category_counts
            }
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Error parsing CSV: {str(e)}")
    
    # Generic success for other allowed types
    return {
        "email": "24f2002015@ds.study.iitm.ac.in",
        "filename": filename,
        "message": "File processed"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8010)
