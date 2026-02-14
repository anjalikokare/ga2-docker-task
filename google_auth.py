import os
import uvicorn
from fastapi import FastAPI, Request, HTTPException
from starlette.middleware.sessions import SessionMiddleware
from starlette.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth

# 1. Create credentials at https://console.cloud.google.com/
# 2. Add http://127.0.0.1:8000/auth to "Authorized redirect URIs"
GOOGLE_CLIENT_ID = "REPLACE_WITH_YOUR_CLIENT_ID"
GOOGLE_CLIENT_SECRET = "REPLACE_WITH_YOUR_CLIENT_SECRET"

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key="super-secret-key")

oauth = OAuth()
oauth.register(
    name='google',
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'}
)

@app.get("/")
async def login(request: Request):
    # This automatically handles the redirect to Google
    redirect_uri = request.url_for('auth')
    # If standard url_for returns http instead of https (common in local dev), 
    # and Google complains, you can force it:
    # redirect_uri = "http://127.0.0.1:8000/auth"
    return await oauth.google.authorize_redirect(request, str(redirect_uri))

@app.get("/auth")
async def auth(request: Request):
    try:
        token = await oauth.google.authorize_access_token(request)
        # Store the id_token in the session
        request.session['id_token'] = token.get('id_token')
        return RedirectResponse(url='/id_token')
    except Exception as e:
        return {"error": str(e)}

@app.get("/id_token")
async def get_id_token(request: Request):
    id_token = request.session.get('id_token')
    if not id_token:
        return RedirectResponse(url='/')
    
    return {
        "id_token": id_token,
        "client_id": GOOGLE_CLIENT_ID
    }

if __name__ == "__main__":
    # Using 127.0.0.1 is standard for Google OAuth redirect testing
    uvicorn.run(app, host="127.0.0.1", port=8000)

