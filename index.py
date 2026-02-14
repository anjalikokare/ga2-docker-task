from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
import json
import os
import math

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Load data
# In Vercel, the file should be accessible relative to the function file
DATA_FILE = os.path.join(os.path.dirname(__file__), "q-vercel-latency.json")

def load_data():
    try:
        with open(DATA_FILE, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

data = load_data()

def calculate_metrics(region_data, threshold_ms):
    if not region_data:
        return {
            "avg_latency": 0,
            "p95_latency": 0,
            "avg_uptime": 0,
            "breaches": 0
        }
    
    latencies = [d["latency_ms"] for d in region_data]
    uptimes = [d["uptime_pct"] for d in region_data]
    
    avg_latency = float(sum(latencies)) / len(latencies)
    avg_uptime = float(sum(uptimes)) / len(uptimes)
    
    # Calculate p95
    sorted_latencies = sorted(latencies)
    idx = int(math.ceil(0.95 * len(sorted_latencies))) - 1
    p95_latency = sorted_latencies[idx] if idx >= 0 else 0
    
    # Count breaches
    breaches = sum(1 for l in latencies if l > threshold_ms)
    
    return {
        "avg_latency": float(f"{avg_latency:.2f}"), # Formatting as strings or float? Prompt says return metrics.
        "p95_latency": p95_latency,
        "avg_uptime": float(f"{avg_uptime:.3f}"),
        "breaches": breaches
    }

@app.post("/api")
async def get_metrics(payload: Dict = Body(...)):
    regions = payload.get("regions", [])
    threshold_ms = payload.get("threshold_ms", 180)
    
    metrics = {}
    
    for region in regions:
        # Filter data for this region
        region_data = [d for d in data if d["region"] == region]
        metrics[region] = calculate_metrics(region_data, threshold_ms)
        
    return metrics

# Need this for local testing with uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
