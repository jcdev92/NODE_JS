const productsControllers = require('./products.controllers');

const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
}

const getProductById = (req, res) => {
    const {id} = req.params;
    productsControllers.getProductById(id)
        .then(data => {if (data) { res.status(200).json(data) } else { res.status(404).json({message: `Product ${id} not found`})} })
        .catch(err => res.status(404).json(err));
}

const postProduct = (req, res) => {
    const data = req.body;
    if (data.name && data.category && data.price && data.isAvailable) {
        productsControllers.createProduct(data)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err));
    } else {
        res.status(400).json({message: 'Bad request'});
    }
}

const patchProduct = (req, res) => {
    const {id} = req.params;
    const {name, category, price, isAvailable} = req.body;
    productsControllers.updateProduct(id, {name, category, price, isAvailable})
        .then(response => {if (response[0]) { res.status(200).json({message: `Product ${id} updated`}) } else { res.status(404).json({message: `Product ${id} not found`})} })
        .catch(err => res.status(400).json(err));
}

const putProduct = (req, res) => {
    const {id} = req.params;
    const {name, category, price, isAvailable} = req.body;
    if (name && category && price && isAvailable) {
        productsControllers.updateProduct(id, {name, category, price, isAvailable})
            .then(response => {if (response[0]) { res.status(200).json({message: `Product ${id} updated`}) } else { res.status(404).json({message: `Product ${id} not found`})} })
            .catch(err => res.status(400).json(err));
    } else {
        res.status(400).json({message: 'Bad request', fields: {name: 'string', category: 'string', price: 'integer', isAvailable: 'Boolean'}});
    }
}

const deleteProduct = (req, res) => {
    const {id} = req.params;
    productsControllers.deleteProduct(id)
        .then(response => {if (response) { res.status(200).json({message: `Product ${id} deleted`}) } else { res.status(404).json({message: `Product ${id} not found`})} })
        .catch(err => res.status(400).json(err));
}

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    patchProduct,
    putProduct,
    deleteProduct
}
