// const templateExports = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')

// console.log(templateExports.emailTemplate);

//? Callbacks
// const {getUserById} = require('./03-callbacks')

//? Arrow Callbacks
const {getUserById} = require('./src/js-foundation/04-arrows')

const id = 2;

//? old way 
// getUserById(id, function(error, user){
//     if (error) {
//         throw new Error(error);
//     }

//     console.log(user);
// })

//? arrows way
getUserById(id, (error, user) => {
    if (error) throw new Error(error);
    console.log(user)
})
