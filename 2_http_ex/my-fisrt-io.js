const fs = require('fs');
const filname = process.argv[2];// remember the firts 2 are for paths, 3th is as a readline

// fs.readFile//is better using this 'cause is async
const file= fs.readFileSync(filname, 'utf-8');
// const content = file.toString();
const lines = file.split('\n').length - 1;//

// console.log(file);
console.log(lines);

