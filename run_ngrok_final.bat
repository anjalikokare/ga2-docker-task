@echo off
set "NGROK_PATH=C:\Users\ADMIN\Downloads\ngrok-v3-stable-windows-amd64\ngrok.exe"

"%NGROK_PATH%" http 11434 ^
  --response-header-add="X-Email: 24f2002015@ds.study.iitm.ac.in" ^
  --response-header-add="Access-Control-Expose-Headers: *" ^
  --response-header-add="Access-Control-Allow-Headers: Authorization,Content-Type,User-Agent,Accept,Ngrok-skip-browser-warning" ^
  --log=stdout > ngrok_run.log 2>&1
