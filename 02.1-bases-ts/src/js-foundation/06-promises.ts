import { http } from '../plugins';
import { Pokemon } from './06-promises-interfaces';

export const getPokemonById = async( id: string | number ):Promise<Pokemon> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  const pokemon: Pokemon = await http.get( url );

  //? asyn await
  // const resp = await fetch( url ); //? con await se indica que se espere por esto que se ejecute y luego siga
  // const pokemon = await resp.json();


  // throw new Error('Pokemon no existe');
  
  return pokemon;
  
  // return fetch( url ) //? promesas en cadenas
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );

}
