const workoutService = require("../services/workoutService");

const getAllWorkouts = (req,res) =>{
    const allWorkouts = workoutService.getAllWorkouts();
    // console.log("miraa",workoutService.getAllWorkouts);
  res.send({status: "OK", data: allWorkouts});  
};

const getOneWorkout = (req,res) =>{
    const id = req.params.workoutId;
    if(!id){return false}
    // console.log("mira esto es lo que estas solicitando ",id);
    const Workout = workoutService.getOneWorkout(id);
   res.status(201).send({status:"OK", data:Workout})
};

const createNewWorkout = (req,res) =>{
    const {body} = req;
    
    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        return;    
    }
    
    const newWorkout = { name : body.name, mode: body.mode, equipment: body.equipment, exercises: body.exercises, trainerTips: body.trainerTips}
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createdWorkout});  
};

const updateWorkout = (req,res) =>{
    const {body} = req;
    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips || !body.id){
        return;    
    }
    const updateWorkout = { name : body.name, mode: body.mode, equipment: body.equipment, exercises: body.exercises, trainerTips: body.trainerTips, id:body.id, createdAt: body.createdAt, updateddAt: body.updateddAt }
    const updatedWorkout = workoutService.updateWorkout(updateWorkout);
   
    res.status(201).send({status: "OK", data:updatedWorkout});  
};

const deleteOneWorkout = (req,res) =>{

    const id = req.params.workoutId;
    // console.log("id tiene ->",id);
    // if(!body.id){
    //     return;
    // }
    // // const info = {id: body.id};
    const delleted = workoutService.deleteOneWorkout(id);
    res.status(201).send({status: "OK", data: delleted});  
};

module.exports = {getAllWorkouts,getOneWorkout,createNewWorkout,updateWorkout,deleteOneWorkout};