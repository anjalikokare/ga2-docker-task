from fastapi import FastAPI, UploadFile, File, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import pandas as pd
import io

app = FastAPI()

# Enable CORS for any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

TOKEN = "3g67xlm4rvxgssg6"
MAX_SIZE = 52 * 1024  # 52KB

@app.post("/upload")
async def upload_file(
    request: Request,
    file: UploadFile = File(...),
    x_upload_token_9970: Optional[str] = Header(None)
):
    # Rule 1: Authentication
    if x_upload_token_9970 != TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized")

    # Rule 2: File type validation
    filename = file.filename
    allowed_extensions = {".csv", ".json", ".txt"}
    if not any(filename.lower().endswith(ext) for ext in allowed_extensions):
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Rule 3: File size validation
    content = await file.read()
    if len(content) > MAX_SIZE:
        raise HTTPException(status_code=413, detail="Payload Too Large")

    # Success Logic for CSV
    if filename.lower().endswith(".csv"):
        try:
            df = pd.read_csv(io.BytesIO(content))
            
            # Calculations
            rows = len(df)
            columns = list(df.columns)
            total_value = float(df["value"].sum())
            category_counts = df["category"].value_counts().to_dict()
            
            # Sort category counts by key for consistency (optional)
            category_counts = {k: int(v) for k, v in category_counts.items()}

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

    return {"message": "File uploaded successfully", "filename": filename}

if __name__ == "__main__":
    import uvicorn
    # Important: Port 8000 as requested
    uvicorn.run(app, host="127.0.0.1", port=8000)
