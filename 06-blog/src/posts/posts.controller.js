const Posts = require('../models/posts.models');
const uuid = require('uuid');
const User = require('../models/users.models');
const Category = require('../models/categories.models');

const getAllPosts = async () => { return await Posts.findAll({
    attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'categoryId']
    },

    include: [
        {
            model: Category,
        },
        {
            model: User,
            attributes: ['id', 'firstName', 'lastName', 'email']
        }
    ]
})};

const getPostById = async (id) => (await Posts.findOne({where: id}));

const createPost = async (data) => {
    return await Posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        userId: data.userId,
        categoryId: data.categoryId
        })
}

const getPostsByCategory = async (categoryId) => {
    return await Posts.findAll({
        where: {
            categoryId
        }
    })

}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    getPostsByCategory
}
