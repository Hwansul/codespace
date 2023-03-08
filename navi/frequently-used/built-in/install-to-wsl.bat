@echo off
:: Install Windows Terminal. After this command is executed, click install button on your monitor.
Start-Process 'https://aka.ms/terminal'

:: Install windows subsytem for linux automatically.
wsl.exe --install
