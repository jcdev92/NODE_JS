//* patron adaptador
//? las dependencias tratar de que se usen a traves de funciones propias para que cuando toque hacer cambios de dependencias en toda la app, sea mas facil la adaptacion, solo se va a un solo sitio a cambiar.

import getAgePlugin from 'get-age';

export const getAge = (birthdate: string) => {
    if (!birthdate) return new Error('birthdate is required');
    return getAgePlugin(birthdate)
}
