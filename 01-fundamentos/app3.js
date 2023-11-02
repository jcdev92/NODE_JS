const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

//? contando las palabras en content
const wordCount = content.split(' ').length;
console.log(`numero de palabras: ${wordCount}`);

//? contar cuantas palabras 'react' hay
// const words = content.split(' ');
// const reactWordCount = words.filter( word => word.toLowerCase().includes('react')).length; //? it counts 50 react words in the docs... but with regular expresion we can get a bit more

const reactWordCount = content.match(/react/gi ?? []).length //? now we have 61 react words



console.log(`numero de palabras "react" en el contenido: ${reactWordCount}`);