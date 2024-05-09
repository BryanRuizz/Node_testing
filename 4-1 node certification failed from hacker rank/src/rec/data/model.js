// const data = require('../data/recipes.json');
import fs from "node:fs";
import path from "node:path";

const myjsonpath = path.resolve(import.meta.dirname, "../data/recipes.json");
// console.log(myjsonpath);

export const getData = async () => {


    try {
        const rawData = await fs.promises.readFile(myjsonpath, 'utf-8');
        const data2 = JSON.parse(rawData);
        return data2;
      } catch (err) {
        // console.error('Error al leer o analizar el archivo JSON:', err);
        return null; // Or another appropriate value for error handling
      }
  };

// const pathfile = path.join(import.meta.dirname,"recipes.json");

// // console.log("esta es la ruta", pathfile);
// export const getData = () => {
//   // console.log("entrando en get");
//   const data = fs.readFile(pathfile, "utf-8", (err, dataa) => {
//     // console.log("entrando en funcion");
//     if (err) {
//       // console.log("esta dnado err",err);
//       return err
//     }
//     const data2 = JSON.parse(dataa);
//     // console.log("valor esperado", dataa);
//     return data2;
//   })
//   return data;
// }


// Ejecuta `getdata()` y maneja la promesa devuelta
// getData();
// 

