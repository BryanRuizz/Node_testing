// const data = require('../data/recipes.json');
import fs from "node:fs";
import path from "node:path";

const myjsonpath = path.resolve(import.meta.dirname, "../data/recipes.json");
// console.log(myjsonpath);

export const getData = async () => {
    let data2; // Declarar variable fuera del bloque try-catch
  
    try {
        const rawData = await fs.promises.readFile(myjsonpath, 'utf-8');
        const data2 = JSON.parse(rawData);
        return data2;
      } catch (err) {
        console.error('Error al leer o analizar el archivo JSON:', err);
        return null; // Or another appropriate value for error handling
      }
  };


// Ejecuta `getdata()` y maneja la promesa devuelta
// getData().then((data) => {
//     console.log('Datos leídos:', data);
// }).catch((err) => {
//     console.error('Error:', err);
// });


