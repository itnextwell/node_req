const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
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
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
});

User.prototype.toJSON = function () {
   const values = { ...this.get() };
   delete values.password ;
   return values;
};

module.exports = User;