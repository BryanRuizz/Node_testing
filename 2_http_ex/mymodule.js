 const fs = require('fs');

 module.exports = function(dirname, ext, callback){
    // dirname = directorio / ext = extencion / callback una funcion que espera err y data

// readdir es asyn por ende necesita un callback
    fs.readdir(dirname, function (err,list){
        if(err){
            // si encuentra un err lo pasamos a la primera callback para mandarlo a quien lo solicito
            return callback(err);
        }
        
        const result = [];
        // list.forEach(file=>{
        //     file.split(".")[1]===ext ? result.push(file) : null;
        // })
        list.forEach(function(file){
            file.split(".")[1]===ext ? result.push(file) : null;
        });

        // null para error y el data
        callback(null,result);
        // sino hay error pues manda un null para evitar un err, y su resultado

    })

 }   