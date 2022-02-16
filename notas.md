#Domain driven desing
Es una práctica de desarrollo de software que pone el acento en el Dominio del Negocio como faro del proyecto y en su Modelo como herramienta de comunicación entre negocio y tecnología.

#Capas:

1 api: Se relacionan todos los recursos que salen a internet (request).
-controladores.
-reglas de ruteo.
-rutas
-middlewares.
-configuracion del servidor.

2 services: Intermediario entre el pedido de la api y los datos, una vez fijo metodo en api se llama a services.

3 domain: Concentra las entidades del uso de la aplicacion.

4 config: Dependiendo el entorno se aplican diferentes configuraciones que son utilizadas por las demas capas.

-----------------------------------------------------------------------------------------------------------------------


/config/environments
-index.js es el encargado de sacar las configuraciones dependendiendo el entorno.
-development.js/production.js/qa.js son los entornos de desarrollo, produccion y pruebas.

/api
-startup.js va a llevar las configuraciones del proyecto.
-container.js va a llevar la configuracion
dependiendo de si solicitan app o server.
-server.js se encarga de la conexion.
-container.js hace la inyeccion de dependencias, por ej : cuando se solicite una dependencia con el nombre UserController se inyecta ese UserController.

/api/controllers
-index.js exporta los controladores
-user.controllers tiene los controladores

/api/routes
-index.js va a ser quien se encargue de todas las rutas
-user.routes.js indica las rutas y los metodos a utilizar.

/dal (data acces layer)


