const workoutService = require("../services/workoutService");

const getAllWorkouts = (req,res) =>{
    const allWorkouts = workoutService.getAllWorkouts();
    // console.log("miraa",workoutService.getAllWorkouts);
  res.send({status: "OK", data: allWorkouts});  
};
const getOneWorkout = (req,res) =>{
    const Workout = workoutService.getOneWorkout();
    res.send(`get workout ${req.params.workoutId}`);  
};
const createNewWorkout = (req,res) =>{
    const {body} = req;
    
    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        return;    
    }
    
    const newWorkout = { name : body.name, mode: body.mode, equipment: body.equipment, exercises: body.exercises, trainerTips: body.trainerTips}
    const createdWorkout = workoutService.createNewWorkout (newWorkout);
    res.status(201).send({status: "OK", data: createdWorkout});  
};
const updateWorkout = (req,res) =>{
    const updatedWorkout = workoutService.updateWorkout ();
    res.send(`Update workout ${req-params.workoutId}`);  
};
const deleteOneWorkout = (req,res) =>{
    const deletedWorkout = workoutService.deleteOneWorkout ();
    res.send(`Delete workout ${req.params.workoutId}`);  
};

module.exports = {getAllWorkouts,getOneWorkout,createNewWorkout,updateWorkout,deleteOneWorkout};