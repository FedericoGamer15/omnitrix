@echo off
echo Iniciando servidor local para el Omnitrix Simulator...

:: El comando 'start' abre IIS Express en una ventana separada para no detener el script
start "Servidor Omnitrix" "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:"C:\Users\sr-frederick\Downloads\omnitrix simulator html" /port:8000

echo Esperando a que el servidor arranque...
:: Esperamos 2 segundos para darle tiempo al servidor de encender correctamente
timeout /t 2 /nobreak > NUL

echo Abriendo el simulador en Brave...
:: Le ordenamos a Brave que abra el enlace. Si esta cerrado lo abre, si esta abierto usa una nueva pestaña.
start brave "http://localhost:8000/index.html"

:: Cerramos esta ventana negra principal (la del servidor seguira abierta en segundo plano)
exit