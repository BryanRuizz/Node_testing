const mymodule = require('./mymodule');

const dirname = process.argv[2];
const ext = process.argv[3];

mymodule(dirname,ext,function (err,data){
    // logica de espera del callback
    if(err)console.log(err);
    // logica de la respuesta que manda mymodule
    data.forEach(function(file){
        console.log(file);    
    });
    
});