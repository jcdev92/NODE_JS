const { http } = require('../plugins');

const getPokemonById = async( id ) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  const pokemon = await http.get( url );

  //? asyn await
  // const resp = await fetch( url ); //? con await se indica que se espere por esto que se ejecute y luego siga
  // const pokemon = await resp.json();


  // throw new Error('Pokemon no existe');
  
  return pokemon.name;
  
  // return fetch( url ) //? promesas en cadenas
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );

}



//? exportacion unica
module.exports = getPokemonById;