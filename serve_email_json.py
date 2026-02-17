from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
def get_email():
    return JSONResponse(content={"email": "24f2002015@ds.study.iitm.ac.in"})

@app.get("/email")
def get_email_text():
    return "24f2002015@ds.study.iitm.ac.in"

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8013)
