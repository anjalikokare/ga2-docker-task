@echo off
taskkill /F /IM python.exe /IM cloudflared.exe /IM ngrok.exe 2>nul
echo Starting Servers...
set OLLAMA_ORIGINS=*
start /B ollama serve
start /B python -m http.server 8080 --bind 127.0.0.1
start /B python ollama_cors_proxy.py
timeout /t 5
echo Starting Tunnels...
start /B c:\Users\ADMIN\OneDrive\Desktop\ga2\cloudflared.exe tunnel --url http://127.0.0.1:8080 --protocol http2 --logfile cloudflared.log
start /B c:\Users\ADMIN\Downloads\ngrok-v3-stable-windows-amd64\ngrok.exe http 11434 --response-header-add "X-Email: 24f2002015@ds.study.iitm.ac.in" --response-header-add "Access-Control-Expose-Headers: *"
echo Tunnels started in background.
