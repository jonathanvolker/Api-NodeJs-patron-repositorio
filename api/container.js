const { asClass, createContainer , asFunction, asValue }= require("awilix");

const  StartUp  = require("./startup");
const  Server  = require("./server");
const Routes = require("../api/routes");
const config = require("../config/environments")

const UserRoutes =require("../api/routes/user.routes");
const { UserController } = require("../api/controllers");
const { UserService } = require("../services");
const { UserRepository } = require("../dal/repositories");

const db = require("../dal/entities");

const container = createContainer();
// Config
container

    .register({
        // si me solicitan una instancia de Routes:
        router : asFunction( Routes ).singleton(),
        config: asValue(config)
    })

    .register({
        UserRoutes: asFunction( UserRoutes).singleton()
    })

    .register({ 
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
        UserService: asClass( UserService ).singleton()
    })
    .register({
        UserRepository: asClass( UserRepository ).singleton()
    })
    .register({
        db: asValue(db)
    })
module.exports = container;