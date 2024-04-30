const fs = require('fs');

const dirname = process.argv[2];
const ext = process.argv[3];

//dir es para obtener el directorio que debe recorrer por archivos pero sin entrar en ellos
fs.readdir(dirname,function (err,list){
    //el callback toma como primer argymento un err y el resultado en este caso todo lo que alla dentro de del directorio
if (err){
    return console.log(err);
}
list.forEach(function (file){
    // info.txt = info     txt por lo tanto el [1]= txt ya que [0] seria info
    file.split(".")[1] === ext ? console.log(file): null;
    // if(file.endsWith(ext)){
    //     console.log(file);
    // }
})

})

//  para correrlo usar node filtered.js testdir txt 'o csv