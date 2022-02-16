class StartUp { 
    //recibo la inyeccion del server
    constructor({server}){
        this._server = server;
    }
    //espero la resolucion del metodo start del server
    async start(){
        await this._server.start();
    }
};

module.exports = StartUp;