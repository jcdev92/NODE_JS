const Users = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./posts.models')

const initModels = () => {
    //? Associations
    //? One to Many

    //? A post belongs to a user
    Posts.belongsTo(Users)
    //? A user can have many posts
    Users.hasMany(Posts)

    //? A post belongs to a category
    Posts.belongsTo(Categories)
    //? A category can have many posts
    Categories.hasMany(Posts)
}

module.exports = initModels