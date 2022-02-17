module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
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

}