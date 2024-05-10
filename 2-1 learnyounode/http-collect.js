const http = require("http");
const url = process.argv[2];

http.get(url,function(response){
    let result = "";
    response.setEncoding("utf-8");
    response.on("data", function(chuck){
        result+=chuck;
    });

    response.on("end",()=>{
        console.log(result.length);
        console.log(result);
    })

});
