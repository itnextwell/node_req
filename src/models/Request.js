const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Request = sequelize.define('request', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isApproved: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    isProcessed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // Inicialmente, una solicitud no está procesada
    }
});

module.exports = Request;