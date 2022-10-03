const router = require('express').Router();
const usersService = require('./users.services');

router.get('/users', usersService.getUsers);
router.get('/users/:id', usersService.getOneUser);
router.post('/users', usersService.postUser);

module.exports = router;