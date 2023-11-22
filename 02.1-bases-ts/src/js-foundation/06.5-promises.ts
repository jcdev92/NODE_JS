import { http } from '../plugins';

export const getPokemonById = async( id: string | number ):Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  try {

    const pokemon = await http.get( url );
    return pokemon.name;

  } catch (error) {

    throw `Pokemon with id: ${id} does not xist`

  }


  //? asyn await
  // const resp = await fetch( url ); //? con await se indica que se espere por esto que se ejecute y luego siga
  // const pokemon = await resp.json();


  // throw new Error('Pokemon no existe');
  
  
  // return fetch( url ) //? promesas en cadenas
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );

}
