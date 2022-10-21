const Categories = require('../models/categories.models');

const getAllCategories = async () => {
    return await Categories.findAll();
}

const getCategoryById = async (id) => {
    return await Categories.findOne({ where: id});
}

const createCategory = async (name) => {
    return await Categories.create({ name });
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory
}