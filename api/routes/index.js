const {Router} = require("express")
const bodyParser = require("body-parser");
const cors =require("cors")
//comprime peticiones http
const compression = require("compression");


module.exports = function({ UserRoutes }){
    const router = Router ();
    const apiRoute = Router();

    //indico el middleware 
    apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression)

    apiRoute.use("/user", UserRoutes)
    router.use("/api", apiRoute)
    /*
        para el use seria: 
        GET /api/user/metodoQueQuieroQueEjecute
    */

    return router;
}