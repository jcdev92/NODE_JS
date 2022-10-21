const postController = require('./posts.controller');

const getAllPosts = async (req, res) => {
    postController.getAllPosts()
        .then((data) => (res.status(200).json(data)))
        .catch((err) => (res.status(500).json(err.message)))
}

const createPost = async (req, res) => {
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

module.exports = {
    getAllPosts,
    createPost
}