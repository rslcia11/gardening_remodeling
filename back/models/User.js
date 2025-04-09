const { DataTypes } = require('sequelize');
const sequelize = require('../database/connect');



const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    full_name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false},
    phone_number: { type: DataTypes.STRING(20), allowNull: false },
    service_interest: { 
        type: DataTypes.ENUM('Gardening', 'Construction', 'Remodeling','Snow Removal', 'Other Service'),
        allowNull: false
    },
    message: { type: DataTypes.TEXT, allowNull: true }
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;
