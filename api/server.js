const express = require('express');

class Server {
    constructor({ config, router, container }) {
         this._config = config;
         this._express = express();
         this._express.use(router);
    }
    
    //primer metodo
    async start() {
        return new Promise((resolve, reject) => {
            const http=this._express.listen(config.PORT, () =>{
                const {port} =http.address();
                console.log(`Server on port ${port}`);
            } );

        });
    };

}

module.exports = Server;