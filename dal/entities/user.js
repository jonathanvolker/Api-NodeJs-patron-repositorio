module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'users', 
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName:"users"
    })

    //Asociaciones

    User.associate = function(models){
        User.belongsTo(models.classrooms,{
            foreignKey: 'classroomId',
            as: 'classrooms'
        });
        User.belongsToMany(models.courses,{
            through: 'usercourses',
            as: 'courses',
            foreignKey: 'id'
        })
    }

    return User;
}