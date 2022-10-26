const Posts = require('../models/posts.models');
const uuid = require('uuid');
const User = require('../models/users.models');
const Category = require('../models/categories.models');

const getAllPosts = async(limit, offset) => {
    return await Posts.findAndCountAll({
    limit: limit? limit : 10,
    offset: offset? offset : 1,
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

const getPostById = async (id) => {
    return await Posts.findOne({
        where: {
            id
        },
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
    })
};

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
