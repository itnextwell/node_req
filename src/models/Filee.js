const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Filee = sequelize.define('filee', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //ElementId
});

module.exports = Filee;