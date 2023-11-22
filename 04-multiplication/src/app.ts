import fs from 'fs'

// multiplication table
let num: number = 10;
const title = `=========== TABLA DEL ${num} ===========`;
let content;
let arr = [title]
console.log(title);
for (let i: number = 0; i <= num; i++) {
    content = `            ${i} x ${num} = ${i * num}`;
    console.log(content);
    arr.push(content)
};

const result = arr.join(' \n ')
fs.writeFileSync('multiple.txt', result)
  