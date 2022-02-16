#Primero modularizar las config de environments y crear el .env con las indicaciones para el environment.
*config/environments
-index.js es el encargado de sacar las config dependendiendo el entorno.

#Siempre separar el servidor de la aplicacion como tal.
*api
-startup.js va a llevar las configuraciones del proyecto.
-container.js va a llevar las configuracion
dependiendo de si solicitan app o server.
-server.js se encarga de la conexion.

*routes
index.js va a ser quien se encargue de todas las rutas


