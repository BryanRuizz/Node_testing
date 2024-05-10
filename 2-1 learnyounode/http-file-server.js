const fs = require("node:fs");
const http  = require("node:http");
const port = process.argv[2];
const filename= process.argv[3];

const server = http.createServer((req,res)=>{
    fs.createReadStream(filename).pipe(res);  
})

server.listen(port,()=>console.log(`listening on port: ${port}`))