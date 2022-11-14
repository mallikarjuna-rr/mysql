const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');
const User = require('./user_model');

const Info = sequelize.define('info',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_Id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    }
});

Info.associations = function() {
    Info.belongsTo(User, {
        foreignKey:'user_Id'
    })
}
module.exports = Info;