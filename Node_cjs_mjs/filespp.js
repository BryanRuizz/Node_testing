
const fs = require('fs');
const path = require('path');
const info = require('./data/data2.js');

const PATH_FILE = path.join(__dirname, 'data','alfalfaONE.csv');

const main = ()=>{

fs.readFile(PATH_FILE,"utf-8",(err, data)=>{
    let counter = 0;
    if(!err){
        const arrayline = data.split('\n');
        for(const key in arrayline){
            const line = arrayline[key]
            if(line.includes('bryan')) counter+=1;
        }
        console.log(counter);
        
    }

})

// -------------------------------------------------------------------------
    // console.log(info.Packages);// this managment better the volumn of data
//     //this is better with a big volumn of data
//  fs.createReadStream(PATH_FILE,'utf-8')
// .on('data',(data) =>{
//     // console.log(Buffer.byteLength(data));// te da su tamaño en  espacio
//     console.log(data);

// })
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
//this has problems with a big charge of data
    // fs.readFile(PATH_FILE, 'utf-8',(err,data)=>{
    //     if(!err){
        // console.log(Buffer.byteLength(data));// te da su tamaño en  espacio
    //         // console.log(data.includes('bryan'));
    //         // console.log(data);
    //     }else{
    //         console.log("error",err);
    //     }
    // })
// ----------------------------------------------------------------------------
}

main();


