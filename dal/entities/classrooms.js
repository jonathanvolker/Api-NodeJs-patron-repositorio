module.exports = (sequelize, DataTypes) => {
    const Classroom = sequelize.define(
        'classrooms', 
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        className: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName:"classrooms"
    })

    //Asociaciones

    Classroom.associate = function(models){
        Classroom.hasMany(models.users,{
            foreignKey: 'classroomId',
            as: 'users'
        });
    }

    return Classroom;
}