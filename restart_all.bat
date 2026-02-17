@echo off
taskkill /F /IM python.exe /IM cloudflared.exe /IM ngrok.exe /IM ollama.exe /IM "ollama app.exe" 2>nul
timeout /t 2 /nobreak > nul

echo Starting Dashboard Server on 8080...
start /B python -m http.server 8080 --bind 127.0.0.1

echo Starting Ollama Mock on 11434...
start /B python ollama_mock_v2.py

timeout /t 5 /nobreak > nul

echo Starting Dashboard Tunnel...
del dashboard.log 2>nul
start /B c:\Users\ADMIN\OneDrive\Desktop\ga2\cloudflared.exe tunnel --url http://127.0.0.1:8080 --protocol http2 --logfile dashboard.log

echo Starting Ollama Tunnel...
del ollama_tunnel.log 2>nul
start /B c:\Users\ADMIN\Downloads\ngrok-v3-stable-windows-amd64\ngrok.exe http 11434 --log=stdout > ollama_tunnel.log 2>&1

echo Done. waiting for tunnels to stabilize...
timeout /t 10 /nobreak > nul
