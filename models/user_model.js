const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');
const Post = require('./post_model');
const Info = require('./info_model');

const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    passWord: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
});

User.associations = function()  {
    User.hasMany(Post, {foreignKey:'user_Id',onDelete: 'CASCADE'}),
    User.hasOne(Info,{foreignKey:'user_Id',onDelete: 'CASCADE'})
}
module.exports = User;
