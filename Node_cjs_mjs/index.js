
// cjs - common js, sistemas por defecto de node
// mjs -esmascript, sistema oficial de js para la gestion de modulos
// Que es un modulo, es la creacion

// this code is in cjs or js commonjs in type in package.json untill

// what happen if I wanna use the modules that area in operations? well, we can use it 'cause we exported 

const operations = require('./operations');
const jsonClas = require('./users.json');//Not necessary to have an export module when it's a json, you can require directly in the place where you are needing.
import '';//esmascript 

// console.log(jsonClas);
// console.log(operations.addition(2,5));
const filesystemdev = require('fs');// this is a filesystem and not a web lib, it is a lib form node core
// console.log(__filename,__dirname);//just show u the path

// in your file at the end put .cjs to common js 
//  .mjs to ecmascript


// in the package.json you can put the "type": "module or common" --> if you don't put for defect node takes commonjs 

const {} =  require('jsonwebtoken');

// here
// -----------------------------------------------------------

// from here we use mjs or ecmascript

