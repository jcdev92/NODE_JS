const { Sequelize } = require('sequelize');
const {database} = require('../config');
const {user, password, host, name} = database;

const db = new Sequelize({
    dialect: 'postgres',
    host: host,
    username: user,
    password: password,
    database: name,
});

module.exports = db;