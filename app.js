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
    const {buildPerson} = require('./src/js-foundation/05-factory')
    const obj = {name: 'John', birthdate: '1985-10-21'};
    const john = buildPerson(obj);
    console.log(john);
