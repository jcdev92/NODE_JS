const categoryController = require('./categories.controller');

const getAllCategories = (req, res) => {
    categoryController.getAllCategories()
        .then(categories => res.json(categories))
        .catch(err => res.status(500).json(err));
}

const getCategoryById = (req, res) => {
    const { id } = req.params;
    categoryController.getCategoryById(id)
        .then(category => {if (category) {res.json(category)} else {res.status(404).json({message: `Category ${id} not found`})}})
        .catch(err => res.status(400).json({message: err.message}));
}

const postCategory = (req, res) => {
    const { name } = req.body;
    if (name) {
    categoryController.createCategory(name)
        .then(category => res.status(201).json(category))
        .catch(err => res.status(400).json({message: err.message}));
    } else {
        res.status(400).json({message: 'Category name is required'});
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    postCategory
}