const http= require("http");

const url = process.argv[2];

http.get(url,function (req,res) {
    req.setEncoding('utf8');
    req.on("data",function(data){
        console.log(data);
    })
})
