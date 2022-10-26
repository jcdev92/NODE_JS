const postController = require('./posts.controller');
const {host} = require('../config');

const getAllPosts = (req, res) => {
    //? localhost:9000/posts?limit=10&offset=0
    const limit = Number(req.query.limit || 10)
    const offset = Number(req.query.offset || 0)

    const urlBase = `${host}/api/v1/posts`

    postController.getAllPosts(limit, offset)
        .then((data) => {
            const {count, rows} = data
            const nextPage = count - offset >= limit ? `${urlBase}?limit=${limit}&offset=${offset + limit}` : null
            const previousPage = offset -limit >= 0 ? `${urlBase}?limit=${limit}&offset=${offset - limit}` : null
            res.status(200).json({
            next: nextPage,
            previous: previousPage,
            items: count,
            urlBase,
             limit,
             offset,
            results: rows
        })})
        .catch((err) => (res.status(500).json(err.message)))
}

const createPost = (req, res) => {
    const {title, content, categoryId} = req.body
    const userId = req.user.id
    if (title && content && categoryId) {
    postController.createPost({title, content, userId, categoryId})
        .then((data) => (res.status(201).json(data)))
        .catch((err) => (res.status(500).json(err.message)))
    } else {
        res.status(400).json({message: 'Please fill all fields', fields: {
            "title": "string",
            "content": "string",
            "categoryId": "string"
            }})
    }
}

const getPostByCategory =  (req, res) => {
    const categoryId = req.params.id
    postController.getPostsByCategory(categoryId)
        .then((data) => (res.status(200).json(data)))
        .catch((err) => (res.status(400).json(err.message)))
}

module.exports = {
    getAllPosts,
    createPost,
    getPostByCategory
}