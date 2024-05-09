
import express, { json } from 'express';
const router = express.Router();
import { getData } from '../data/model.js';
const data2 = await getData();

router
    .get("/", (req, res) => {
        // console.log("llegando");
        res.status(400).send({ data: "NOT_FOUND", })
    })

    // ids esta esperando un arreglo separado por ,
    .get("/:ids", (req, res) => {

        const ids = req.params.ids;
        console.log(ids);
        let valoresAceptados = /^[0-9]+$/;

        const idsArray = ids.split(",");

        if(idsArray){
        
            const algunoCumple = idsArray.some(id => valoresAceptados.test(id));
            if(!algunoCumple){
            return res.status(400).send({messages:"NOT_FOUND"});
            }
        }
        

        let ar1 = idsArray.filter(id => valoresAceptados.test(id));
        let a = [];
        data2.forEach(row => {
            if (ar1.includes(String(row.id))) {
                a.push(row);
            }
        });

        res.status(200).json({ status: "OK", data: a })
    })


export default router;