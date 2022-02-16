const { asClass, createContainer , asFunction, asValue }= require("awilix");

const container = createContainer();

const  StartUp  = require("./startup");
const  Server  = require("./server");

// Config
container.register({ 
    /* si me solicitan una app:
    le doy instancia Awilix asClassde StartUp como un 
    singleton (unica instancia de este objeto)
   */
   app: asClass( StartUp).singleton(),
    
   /* si me solicitan un server:
    le doy instancia Awilix asClassde Server como un 
    singleton (unica instancia de este objeto)
   */
    server: asClass( Server).singleton(),

 })


module.exports = container;