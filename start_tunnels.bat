@echo off
start /b npx -y localtunnel --port 8003 > lt_upload.txt 2>&1
start /b npx -y localtunnel --port 8080 > lt_dashboard.txt 2>&1
start /b npx -y localtunnel --port 8002 > lt_ollama.txt 2>&1
