const DB = require("../database/db.json");
const { saveToDatabase}= require("../database/utils");
// console.log("DB -->:",DB);

const getAllWorkouts = () => {
    const workouts = DB.workouts;
    return workouts;
}

const createNewWorkout = (newWorkout ) =>{
    const isAlreadyAdded = 
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) >-1;
    // this is to validate if we already have an index name with the same value.

    if(isAlreadyAdded){
        return
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
}

module.exports = {getAllWorkouts, createNewWorkout};