//? import - export
// const templateExports = require('./js-foundation/01-template')
// console.log(templateExports.emailTemplate);

//? destructuring
// require('./js-foundation/02-destructuring')

//? Callbacks
// const {getUserById} = require('./js-foundation/03-callbacks')

//? Arrow Callbacks
// const {getUserById} = require('./js-foundation/04-arrows')

// const id = 2;

//? old way 
// getUserById(id, function(error, user){
//     if (error) {
//         throw new Error(error);
//     }

//     console.log(user);
// })

//? arrows way
// getUserById(id, (error, user) => {
//     if (error) throw new Error(error);
//     console.log(user)
// })

//? Factory Functions
// const {getId, getAge} = require('./plugins') //? patron adaptador
// const {buildMakePerson} = require('./js-foundation/05-factory')
// const makePerson = buildMakePerson({getId, getAge})


// const obj = {name: 'John', birthdate: '1985-10-21'};
// const john = makePerson(obj);
// console.log(john);

//? promises, asyn await, http request...
import {getPokemonById} from './js-foundation/06-promises';

getPokemonById(4)
  .then( ( pokemon ) => console.log(pokemon.name) )
  .catch( ( err ) => console.log( err ) )
  .finally( () => console.log('Finalmente') );

//? winston logger
import { buildLogger } from "./plugins"
const logger = buildLogger('./app.js');

logger.log('Hola Mundo');
logger.error('Aqui hubo un problema');



