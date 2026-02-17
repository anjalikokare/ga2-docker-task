@echo off
echo Starting Mock Ollama Server on 11434...
start /B python ollama_mock.py

echo Waiting 5 seconds...
timeout /t 5 /nobreak > nul

echo Starting ngrok...
del ngrok_output.log 2>nul
c:\Users\ADMIN\Downloads\ngrok-v3-stable-windows-amd64\ngrok.exe http 11434 --response-header-add "X-Email: 24f2002015@ds.study.iitm.ac.in" --log=stdout > ngrok_output.log 2>&1
