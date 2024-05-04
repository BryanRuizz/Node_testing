const http= require("http");

const url = process.argv[2];

http.get(url,function (res) {
    res.setEncoding('utf8');
    res.on("data",function(data){
        console.log(data);
    });
    res.on("err",console.log);

}).on("err",console.log);
