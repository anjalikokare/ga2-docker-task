@echo off
echo Starting Python HTTP Server on 8080...
start /B python -m http.server 8080 --bind 127.0.0.1

echo Waiting 5 seconds for server to start...
timeout /t 5 /nobreak > nul

echo Starting Cloudflare Tunnel...
del cloudflared.log 2>nul
c:\Users\ADMIN\OneDrive\Desktop\ga2\cloudflared.exe tunnel --url http://127.0.0.1:8080 --logfile cloudflared.log
