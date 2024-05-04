const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

const v1router = require("./v1/routes/index.js");

const v1workoutRouter = require("./v1/routes/workoutRoutes.js");

app.use(cors());

// app.use("/api/v1",v1router);

// app.get('/',(req,res)=>{
//     res.send("<h1>Hello world</h1>");
// })

app.use(express.json());
app.use("/api/v1/workouts",v1workoutRouter);


app.listen(PORT,()=>{
console.log(`⚡ Server listening on port ${PORT}`)}

);