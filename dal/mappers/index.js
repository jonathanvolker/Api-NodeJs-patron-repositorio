
module.exports = {
    toDbEntity (user){
        const { name, lastname, id } = user;
        return { name, lastname, id };
    }
}