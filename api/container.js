const { asClass, createContainer , asFunction, asValue }= require("awilix");

const container = createContainer();

const  StartUp  = require("./startup");
const  Server  = require("./server");
const { UserController } = require("../api/controllers");
const UserRoutes =require("../api/routes/user.routes");
const Routes = require("../api/routes");
const config = require("../config/environments")

// Config
container.register({ 
    /* si me solicitan una app:
    le doy instancia Awilix asClassde StartUp como un 
    singleton (unica instancia de este objeto)
   */
   app: asClass( StartUp ).singleton(),
    
   /* si me solicitan un server:
    le doy instancia Awilix asClassde Server como un 
    singleton (unica instancia de este objeto)
   */
    server: asClass( Server ).singleton(),

 })
    .register({
        // si me solicitan una instancia de UserController: 
        UserController: asClass( UserController ).singleton()
    })

    .register({
        // si me solicitan una instancia de Routes:
        router : asFunction( Routes ).singleton()
    })
    
    .register({
        config: asValue(config)
    })

    .register({
        UserRoutes: asFunction( UserRoutes).singleton()
    })

module.exports = container;