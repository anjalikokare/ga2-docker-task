from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

@app.middleware("http")
async def add_custom_headers(request, call_next):
    response = await call_next(request)
    # Add required headers
    response.headers["X-Email"] = "24f2002015@ds.study.iitm.ac.in"
    response.headers["X-User-Email"] = "24f2002015@ds.study.iitm.ac.in"
    response.headers["Access-Control-Expose-Headers"] = "X-Email, X-User-Email"
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

@app.get("/")
def read_root():
    return {"status": "running"}

@app.api_route("/{path_name:path}", methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])
def catch_all(path_name: str):
    return {"status": "running", "path": path_name}

if __name__ == "__main__":
    # Bind to 11434 to mimic default Ollama port
    uvicorn.run(app, host="127.0.0.1", port=11434)
