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
});

module.exports = Request;