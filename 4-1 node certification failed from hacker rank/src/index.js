import express from 'express';
import cors from 'cors';
import shop from "./rec/recipes/recipes.js";


const port = process.env.port || 3000;
const app = express();
app.use(cors());



app.get("/",(req,res)=>{
    // console.log("hello world");
    // res.status(200).send({status:"ok", data:"hello world"})
    res.send("<h1>Hello world</h1>");
});

app.use("/shopping-list",shop);

app.listen(port,()=>{

    console.log(`⚡server running in http://localhost:${port}`)
});