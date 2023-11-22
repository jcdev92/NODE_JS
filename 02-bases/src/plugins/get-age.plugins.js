//* patron adaptador
//? las dependencias tratar de que se usen a traves de funciones propias para que cuando toque hacer cambios de dependencias en toda la app, sea mas facil la adaptacion, solo se va a un solo sitio a cambiar.

const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) return new Error('birthdate is required');
    return getAgePlugin(birthdate)
}

module.exports = {
    getAge,
}