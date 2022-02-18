
class UserController{
    constructor({UserService}){
        this._userService = UserService;
    }

      async getUsers(req, res){ 
        const users = await this._userService.getUsers();
       return res.send({
           error:false,
           payload: users
       });
    }
    

    /*metodo para buscar todos los usuarios 
    primero llama al repositorio y este llama a la BD
    */
    async createUser(req, res){
        const {body}= req;
        const createdUser = await this._userService.createUser(body); 
        res.send({
            error:false,
            payload:createdUser
        })  

    }
    

}

module.exports = UserController;