const {DataTypes} = require('sequelize'); //? Import DataTypes from sequelize, this is used to define the data types of the model
const db = require('../utils/database'); //? Import the database instance

//? Define the model
const Products = db.define('products', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_available'
    }
});

module.exports = Products;