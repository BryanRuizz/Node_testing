const workout = require("../database/Workout");
const {v4:uuid} = require("uuid");


const getAllWorkouts = () =>{
    const getAllWorkouts = workout.getAllWorkouts();
    return getAllWorkouts;
}
const getOneWorkout = () =>{
    return;
}
const createNewWorkout = (newWorkout) =>{
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US",{timeZone:"UTC"}),
        updateddAt: new Date().toLocaleString("en-US",{timeZone:"UTC"}),
    }
 const createdWorkout = workout.createNewWorkout(workoutToInsert);
 return createdWorkout;
}

const updateWorkout = () =>{
    return;
}
const deleteOneWorkout = () =>{
    return;
}

module.exports = {getAllWorkouts,getOneWorkout,createNewWorkout,updateWorkout,deleteOneWorkout};