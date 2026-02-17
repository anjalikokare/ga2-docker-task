from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
    allow_credentials=True,
)

@app.middleware("http")
async def add_custom_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Email"] = "24f2002015@ds.study.iitm.ac.in"
    response.headers["X-User-Email"] = "24f2002015@ds.study.iitm.ac.in"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Expose-Headers"] = "*"
    return response

@app.get("/")
async def root():
    return Response(content="Ollama is running", media_type="text/plain")

@app.get("/api/version")
async def version():
    return {"version": "0.1.28"}

@app.post("/api/generate")
async def generate(request: Request):
    return {"model": "llama3", "response": "Success", "done": True}

@app.get("/api/tags")
async def tags():
    return {"models": [{"name": "llama3:latest"}]}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=11434)
