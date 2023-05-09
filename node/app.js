import express from "express";
import cors from "cors";

//db
import db from "./database/db.js";

//im enrutador
import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)
try {
   await db.authenticate()
   console.log('conexion exitosa a la DB')
} catch (error) {
    console.log(`el error de con es: ${error}`)
    
}

app.get('/',(req, res) =>{
  res.send('hola mundo')
})

app.listen(8000, ()=>{
    console.log('Server Up Running in http://localhost:8000/')
})
