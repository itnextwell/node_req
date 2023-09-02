const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lasName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identification: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
});

module.exports = User;