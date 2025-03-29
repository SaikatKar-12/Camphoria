'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

const {SALT}= require('../config/serverConfig');
module.exports = (sequelize, DataTypes) => {
  class Convenor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Convenor.init({
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
    clubId: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Convenor',
  });

  Convenor.beforeCreate((convenor)=>{
      const encryptedPassword = bcrypt.hashSync(convenor.password,SALT);
      convenor.password=encryptedPassword;
    });

  return Convenor;
};