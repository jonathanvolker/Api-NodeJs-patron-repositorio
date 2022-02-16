
class UserController{
    constructor({  }){
        
    }

    sayHello(req, res){ 
       return res.send({message:"Hello World!"});
    }
    /*metodo para buscar todos los usuarios 
    primero llama al repositorio y este llama a la BD
    */
    async getUsers(){
        return await this._userService.getUsers();
    }

}

module.exports = UserController;