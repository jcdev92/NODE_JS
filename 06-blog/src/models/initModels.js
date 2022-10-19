const Users = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./posts.models')

const initModels = () => {
    //? Associations
    //? One to Many

    //? A post belongs to a user
    Posts.belongsTo(Users, {foreignKey: 'createdBy'})
    //? A user can have many posts
    Users.hasMany(Posts, {foreignKey: 'createdBy'})

    //? A post belongs to a category
    Posts.belongsTo(Categories, {foreignKey: 'categoryId'})
    //? A category can have many posts
    Categories.hasMany(Posts, {foreignKey: 'categoryId'})
}

module.exports = initModels