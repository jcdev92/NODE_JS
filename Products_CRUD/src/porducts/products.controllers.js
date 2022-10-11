const uuid = require('uuid');
const Products = require('../models/products.models');

const getAllProducts = async () => {
    return await Products.findAll();
}

const getProductById = async (id) => {
    return await Products.findOne({where: {id}});
}

const createProduct = async (data) => {
    return await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    });
}

const updateProduct = async (id, data) => {
    return await Products.update(data, {
        where: {
            id: id
        },
    });
}

const deleteProduct = async (id) => {
    return await Products.destroy({
        where: {
            id: id
        },
    });
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
