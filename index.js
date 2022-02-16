const container = require("./api/container");

// solicito una instancia de una de las dependencias del container
const aplication = container.resolve("app");

//app tiene metodos: 
//start es async
//capturo el error porque el return del Server es una promesa
aplication.start().catch(error =>{
    console.log(error);
    //en caso de que falle cierra todo
    process.exit();
});