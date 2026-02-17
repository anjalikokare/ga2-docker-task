from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
def get_email():
    # Returning JSON might bypass the localtunnel "browser" check
    return {"email": "24f2002015@ds.study.iitm.ac.in"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8011)
