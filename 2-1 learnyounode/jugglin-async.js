const http = require("node:http");
const urls = process.argv.slice(2);


const httRequest = (url)=>{
    return new Promise((resolve,reject)=>{
        http.get(url,(response)=>{
            let result = "";
            response.setEncoding("utf-8");
            response.on("data", (chunck)=>{
                result+=chunck;
            })
            response.on("end",()=>resolve(result));
            response.on("error",(err)=>reject(err));
        });
    })
}


Promise
.allSettled(urls.map(url=>httRequest(url)))
.then(results => results.forEach(result=>console.log(result.value)))