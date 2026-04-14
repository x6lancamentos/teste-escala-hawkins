@echo off
echo ============================================
echo  Push para GitHub - Teste Escala Hawkins
echo ============================================
echo.

REM Tentar encontrar Git em caminhos comuns
set GIT_PATH=
if exist "C:\Program Files\Git\cmd\git.exe" (
    set GIT_PATH=C:\Program Files\Git\cmd
) else if exist "C:\Program Files (x86)\Git\cmd\git.exe" (
    set GIT_PATH=C:\Program Files (x86)\Git\cmd
) else if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
    set GIT_PATH=%LOCALAPPDATA%\Programs\Git\cmd
)

if not "%GIT_PATH%"=="" (
    echo Git encontrado em: %GIT_PATH%
    set PATH=%GIT_PATH%;%PATH%
) else (
    echo AVISO: Git nao encontrado nos caminhos padrao.
    echo Tentando usar git do PATH...
    echo.
)

echo Configurando repositorio...
git init
git add .
git commit -m "Initial commit - Teste Escala Hawkins completo"
git branch -M main
git remote add origin https://x6lancamentos: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@github.com/x6lancamentos/teste-escala-hawkins.git
git push -u origin main --force

echo.
echo ============================================
echo  Push concluido!
echo  Repositorio: https://github.com/x6lancamentos/teste-escala-hawkins
echo ============================================
pause
