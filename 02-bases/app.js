// const templateExports = require('./js-foundation/01-template')

//? import export
    // require('./js-foundation/02-destructuring')
    // console.log(templateExports.emailTemplate);

//? Callbacks
    // const {getUserById} = require('./03-callbacks')

    //? Arrow Callbacks
    // const {getUserById} = require('./src/js-foundation/04-arrows')

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
    // const {getId, getAge} = require('./src/plugins') //? patron adaptador
    // const {buildMakePerson} = require('./src/js-foundation/05-factory')
    // const makePerson = buildMakePerson({getId, getAge})


    // const obj = {name: 'John', birthdate: '1985-10-21'};
    // const john = makePerson(obj);
    // console.log(john);

// promises, asyn await, http request...
const getPokemonById = require('./src/js-foundation/06-promises')
getPokemonById(4)
  .then( ( pokemon ) => console.log({ pokemon }) )
  .catch( ( err ) => console.log( err ) )
  .finally( () => console.log('Finalmente') );
