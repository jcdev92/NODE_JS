import fs from 'fs'

// multiplication table
let num: number = 5;

const title: string = `
====================== 
    TABLA DEL ${num} 
======================`;

let content: string;
let arr: String[] = [title];

console.log(title);

for (let i: number = 0; i <= num; i++) {
    content = `    ${i} x ${num} = ${i * num}`;
    console.log(content);
    arr.push(content);
};

const result: string = arr.join(' \n ');

const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${num}.txt`, result);
