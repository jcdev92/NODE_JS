const uuid = require('uuid');

const usersDB = [{
    id: '1',
    first_name: 'pablo',
    last_name: 'gonzalez',
    email: 'pgon@academlo.com',
    password: 'sadf542',
    birthday: '1980/05/12'
}, {
    id: '2',
    first_name: 'juan',
    last_name: 'gonzalez',
    email: 'juancitoteto@gmail.com',
    password: 'nahdjk23',
    birthday: '1990/08/25'
}, {
        id: '3',
        first_name: 'pedro',
        last_name: 'rodirguez',
        email: 'pedritorod@academlo.com',
        password: 'nadaen50',
        birthday: '1965/02/05'
}];

const getAllUsers = () => {
    return usersDB;
}

const getUserById = (id) => (usersDB.find(user => user.id === id));

const createUser = (first_name, last_name, email, password, birthday) => {

    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    usersDB.push(newUser);
    return newUser;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}