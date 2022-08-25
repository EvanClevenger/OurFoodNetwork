const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create our user model
class User extends Model{} //user inherits all of the functionality from Modle class has

//define table columns and configuration
User.init(
    {
       //define and id column
       id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
       }, 
       //define a username column
       username:{
        type : DataTypes.STRING,
        allowNull: false
       }, 
       //define and email column
       email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
        isEmail: true
        }
       },
       //define a password
       password:{
        type : DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[4]
            } 
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports= User;