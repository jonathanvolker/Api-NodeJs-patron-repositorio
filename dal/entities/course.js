module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define(
        'courses', 
    {
        lecturerId:DataTypes.INTEGER,
        courseName:DataTypes.STRING
    },
    {
        timestamps: false,
        tableName:"courses"
    })

    //Asociaciones

    Course.associate = function(models){
        Course.belongsTo(models.users,{
            foreignKey: 'userCoursesId',
            as: 'users',
       
        });
        Course.belongsToMany(models.lecturers,{
            through: 'lecturerId',
            foreignKey: 'lecturers'
        })
    }

    return Course;
}