const http = require("node:http");
const map = require("through2-map");
const port = process.argv[2];

const server= http.createServer((req,res)=>{
    if(req.method === "POST"){
        req.pipe(map((chunck)=> chunck.toString().toUpperCase())).pipe(res);
    }
});

server.listen(port,()=>console.log(`listening on :${port}`))