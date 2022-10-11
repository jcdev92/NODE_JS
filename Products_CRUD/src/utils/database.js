const { Sequelize } = require('sequelize');
const config = require('../config')

//? Create a new Sequelize instance

const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host,
    port: config.db.port,
    username: config.db.user,
    password: config.db.password,
    database: config.db.name
});

module.exports = db;