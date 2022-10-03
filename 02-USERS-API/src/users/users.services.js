const {getAllUsers, getUserById, createUser} = require('./users.controllers');

const getUsers = (req, res) => {
    const data = getAllUsers();
    res.status(200).json(data);
}

const getOneUser = (req, res) => {
    const { id } = req.params;
    const data = getUserById(id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

const postUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const data = createUser(first_name, last_name, email, password, birthday);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: 'Bad request' });
    }
}

module.exports = {
    getUsers,
    getOneUser,
    postUser
}


