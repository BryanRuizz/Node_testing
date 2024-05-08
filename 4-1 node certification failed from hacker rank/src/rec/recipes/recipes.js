
import express from 'express';
import {getData} from '../data/model.js';
const router = express.Router();

const data2 = await getData();
// console.log(data2);

router
.get("/",(req,res)=>{
    // console.log("llegando");
    res.status(400).send({data: "NOT_FOUND",})
})

// ids esta esperando un arreglo separado por ,
.get("/:ids",(req,res)=>{

    const ids = req.params.ids;
    let valoresAceptados = /^[0-9]+$/;
    if(ids.match(valoresAceptados)){return res.status(400).send({status:"X",message:"NOT_FOUND"});}
    // console.log("ids -->",ids);

})


export default router;