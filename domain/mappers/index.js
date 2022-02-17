const { User } =require("../user");

module.exports = {
    //mapeo el user que venga de cualquier capa a una entidad de mi dominio
    toDomainEntity (user){
        const { name, lastname, id } = user;
        return new User(name, lastname, id);
    }
}