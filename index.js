const container = require("./api/container");

// solicito una instancia de una de las dependencias del container
const application = container.resolve("app");

const db = container.resolve("db");

//app tiene metodos: 
//start es async
//capturo el error porque el return del Server es una promesa
application.start().then(async()=>{
    
    //sincronizo mi app con la bd
    await db.sequelize.sync()
}).catch(error =>{
    console.log(error);
    //en caso de que falle cierra todo
    process.exit();

});