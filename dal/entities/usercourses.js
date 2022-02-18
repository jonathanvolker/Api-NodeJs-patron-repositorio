module.exports = (sequelize, DataTypes) => {
    const UserCourse = sequelize.define(
        'UserCourses', 
    {
       userId:DataTypes.INTEGER,
        courseId:DataTypes.STRING
    },
    {
        timestamps: false,
        tableName:"UserCourses"
    })

    //Asociaciones

    UserCourse.associate = function(models){
       
    }

    return UserCourse;
}