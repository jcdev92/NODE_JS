const router = require('express').Router();
const categoryServices = require('./categories.services');

router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory);

router.route('/:id')
    .get(categoryServices.getCategoryById);

module.exports = router;