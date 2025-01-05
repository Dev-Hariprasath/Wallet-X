const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');

class User extends Model {
    async createHash(plainTextPassword) {
        const saltRounds = 10;
        return await bcrypt.hash(plainTextPassword, saltRounds);
    }

    async checkPassword(userPassword) {
        return await bcrypt.compare(userPassword, this.password);
    }
}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
        lowercase: true,
        validate: { len: [3, 30] }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [8, 100] }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1, 30] }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1, 30] }
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: "#90EE90"
    }
}, { sequelize, modelName: 'User' });

module.exports = User;
