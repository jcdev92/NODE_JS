const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Movies = db.define('movies', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'release_date',
    }
})

module.exports = Movies;