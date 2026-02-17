from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
import httpx
import uvicorn

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

@app.middleware("http")
async def add_headers_middleware(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Email"] = "24f2002015@ds.study.iitm.ac.in"
    response.headers["X-User-Email"] = "24f2002015@ds.study.iitm.ac.in"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Expose-Headers"] = "*"
    return response

@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"])
async def proxy(path: str, request: Request):
    if request.method == "OPTIONS":
        return Response(status_code=200)
    
    # Forward to local Ollama
    url = f"http://localhost:11434/{path}"
    
    async with httpx.AsyncClient(timeout=30.0) as client:
        try:
            # Forward the request
            response = await client.request(
                method=request.method,
                url=url,
                content=await request.body(),
                headers={k: v for k, v in request.headers.items() 
                        if k.lower() not in ['host', 'content-length']},
            )
            
            # Return the response
            return Response(
                content=response.content,
                status_code=response.status_code,
                media_type=response.headers.get("content-type", "application/json"),
            )
        except Exception as e:
            return Response(
                content=f'{{"error": "Ollama not reachable: {str(e)}"}}',
                status_code=503,
                media_type="application/json"
            )

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8003)
