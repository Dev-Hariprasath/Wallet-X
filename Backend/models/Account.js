const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Account extends Model {}

Account.init({
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
}, { sequelize, modelName: 'Account' });

module.exports = Account;
