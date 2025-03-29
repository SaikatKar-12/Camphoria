'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

const {SALT}= require('../config/serverConfig');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teacher.init({
    firstname: {
          type:DataTypes.STRING
        },
        lastname: {
          type:DataTypes.STRING
        },
        email: {
          type: DataTypes.STRING,
          allowNull:false,
          unique:true,
          validate :{
            isEmail:true
          }
        },
        password:{
         type: DataTypes.STRING,
         allowNull:false,
            validate:{
              len:[3,100]
            }
        },
        collegeId: {
          type:DataTypes.INTEGER
        }
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  Teacher.beforeCreate((teacher)=>{
        const encryptedPassword = bcrypt.hashSync(teacher.password,SALT);
        teacher.password=encryptedPassword;
      });
  return Teacher;
};