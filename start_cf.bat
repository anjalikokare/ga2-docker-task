@echo off
taskkill /F /IM cloudflared.exe 2>nul
echo Starting Cloudflare Tunnel...
del dashboard_cf.log 2>nul
c:\Users\ADMIN\OneDrive\Desktop\ga2\cloudflared.exe tunnel --url http://127.0.0.1:8080 --protocol quic --logfile dashboard_cf.log
