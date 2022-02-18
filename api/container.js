const { asClass, createContainer , asFunction, asValue }= require("awilix");
// app Start
const  StartUp  = require("./startup");
const  Server  = require("./server");
const config = require("../config/environments");

//Routes
const Routes = require("../api/routes");
const UserRoutes =require("../api/routes/user.routes");

//Controllers
const { UserController } = require("../api/controllers");

//Services
const { UserService } = require("../services");

//Repositories
const { UserRepository } = require("../dal/repositories");

//Business
const UserBusiness = require("../domain/user.business")

//db
const db = require("../dal/entities");

const container = createContainer();
// Config container
container

//capa ----- API --------
.register({ 
    app: asClass( StartUp ).singleton(),
    router : asFunction( Routes ).singleton(),
    server: asClass( Server ).singleton(),
    UserController: asClass( UserController ).singleton(),
    UserRoutes: asFunction( UserRoutes).singleton()
    

})
//capa ------ servicios ----------
.register({
    UserService: asClass( UserService ).singleton()
})
//capa ----- DataAccessLAyer --------
.register({
    UserRepository: asClass( UserRepository ).singleton()
})
.register({
    UserBusiness: asClass( UserBusiness ).singleton()
})

.register({
    config: asValue(config)
})

.register({
    db: asValue(db)
})
   
module.exports = container;