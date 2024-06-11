import fs from "node:fs";
// import path from './data/archivo.txt'

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
);