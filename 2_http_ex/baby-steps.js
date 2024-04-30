// console.log(process.argv);

let result = 0;

for(i = 2;i< process.argv.length; i++){
    result+= Number(process.argv[i]);
    // console.log(process.argv[i]);
}
console.log(result);


// ejemplo del funcionamineto de process. argv [ i ]
// toma los valores establecidos en la terminal posteriror a ejecutar el node name.js
// pero por que establecemos el valor en dos al iniciar el ciclo 
//  facil debido a que los primeros dos valores por default son rutas 
// ejeeeeemplo

//  c:/bla/alc/lalsa
//  http_ex/baby-step.js
// 1  -------y we start here 
// 2
// 3
//  resutlt = 6

