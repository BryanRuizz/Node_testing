import db from "../database/db.js";  //no cambiar asi correr
import { DataTypes } from "sequelize";


const BlogModel = db.define('alumnos',{
    name: {type: DataTypes.STRING },
    promedio: {type: DataTypes.DOUBLE },
    universidad: {type: DataTypes.STRING },
})

export default BlogModel