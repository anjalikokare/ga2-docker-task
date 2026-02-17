@echo off
echo Setting OLLAMA_ORIGINS to allow all origins...
set OLLAMA_ORIGINS=*

echo Checking if Ollama is already running...
tasklist /FI "IMAGENAME eq ollama.exe" 2>NUL | find /I /N "ollama.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo Ollama is already running.
) else (
    echo Starting Ollama...
    start /B ollama serve
    timeout /t 3 /nobreak > nul
)

echo Starting CORS Proxy on port 8003...
start /B python ollama_cors_proxy.py

echo Waiting for proxy to start...
timeout /t 3 /nobreak > nul

echo Starting ngrok on port 8003...
c:\Users\ADMIN\Downloads\ngrok-v3-stable-windows-amd64\ngrok.exe http 8003
