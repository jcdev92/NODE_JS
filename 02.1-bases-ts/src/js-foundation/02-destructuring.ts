// process es un proceso de node que esta corriendo
// console.log(process);
// console.log(process.env)

const {SHELL, npm_lifecycle_script} = process.env;
console.table({SHELL, npm_lifecycle_script});

export const superHeros = ['Flash', 'Superman', 'Batman'];
//destruturing
const [,,Batman] = superHeros;


