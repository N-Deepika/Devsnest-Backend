const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNULL: false
    },
    password: {
        type: DataTypes.STRING,
        allowNULL: false
    }
});

module.exports = User;