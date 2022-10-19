const db = require('../utils/database')
const {DataTypes} = require('sequelize')
const Users = require('./users.models')
const Categories = require('./categories.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING, //varchar
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'created_by',
        references: {
            model: Users,
            key: 'id'
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            model: Categories,
            key: 'id'
        }
    }
})

module.exports = Posts
