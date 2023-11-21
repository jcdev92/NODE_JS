//* patron adaptador
//? las dependencias tratar de que se usen a traves de funciones propias para que cuando toque hacer cambios de dependencias en toda la app, sea mas facil la adaptacion, solo se va a un solo sitio a cambiar.

export const getAge = (birthdate: string) => {
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
