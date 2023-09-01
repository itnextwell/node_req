const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Elemento = sequelize.define('elemento', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    justification:{
        type: DataTypes.STRING,
        allowNull: false
    },
    responsible:{
        type: DataTypes.STRING,
        allowNull: false
    },
    supplier:{
        type: DataTypes.STRING,
        allowNull: false
    },
    priority:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Elemento;