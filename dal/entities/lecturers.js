module.exports = (sequelize, DataTypes) => {
    const Lecturer = sequelize.define(
        'lecturers', 
    { 
        lecturerName:DataTypes.STRING
    },
    {
        timestamps: false,
        tableName:"lecturers"
    })

    //Asociaciones

    Lecturer.associate = function(models){
        Lecturer.hasOne(models.courses,{
            foreignKey: 'lecturerId',
            as: 'courses',
         
        });
     
    }

    return Lecturer;
}