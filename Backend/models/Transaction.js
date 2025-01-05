const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Transaction extends Model {}

Transaction.init({
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    description: {
        type: DataTypes.STRING
    }
}, { sequelize, modelName: 'Transaction' });

module.exports = Transaction;
