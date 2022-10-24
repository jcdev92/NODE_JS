const router = require('express').Router();
const categoryServices = require('./categories.services');
const {getPostByCategory} = require('../posts/posts.services');

router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory);

router.route('/:id')
    .get(categoryServices.getCategoryById);

router.get('/:id/posts', getPostByCategory);

module.exports = router;