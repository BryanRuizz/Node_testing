const DB = require("../database/db.json");
const { saveToDatabase } = require("../database/utils");
// console.log("DB -->:",DB);

const getOneWorkout = (id) => {
    const one = DB.workouts.filter((workout) => {
        return id === workout.id
    })
    if (one.length < 1) {
        return "not found";
    }
    return one;
}


const getAllWorkouts = (filterParams) => {
    try {
        let workouts = DB.workouts;
        // console.log("mira mode",filterParams);
        if(filterParams.mode){
            let value = filterParams.mode.toLowerCase();
            // console.log("dentro de if",filterParams.mode);
            return DB.workouts.filter((workout)=>
                workout.mode.toLowerCase().includes(value)
            );
        }

        return workouts;
    } catch (error) {
        throw {status:500, message: error}
    }

}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded =
        DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    // this is to validate if we already have an index name with the same value.

    if (isAlreadyAdded) {
        throw {
            status: 400,
            messages: `workout with the name '${newWorkout.name}' already exist`,
        }
    }
    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }

}

const updateAworkout = (workoutUpdate) => {
    // console.log("que me esta llegando model->",workoutUpdate);
    DB.workouts = DB.workouts.map((workout) => {
        if (workout.id === workoutUpdate.id) {

            workoutUpdate.updateddAt = new Date().toLocaleString("en-US", { timeZone: "UTC" }); // Actualiza la fecha con el valor deseado
            //   console.log(workoutUpdate);
            return workoutUpdate; // Reemplaza el elemento completo con la actualización
        } else {
            return workout; // Devuelve el elemento original sin cambios
        }
    });
    // Guarda los cambios en el archivo JSON
    saveToDatabase(DB);

    // Retorna `workoutUpdate` actualizado
    return workoutUpdate;
}


const deleteOneworkout = (deleteworkout) => {

    const deletedvalue = [];

    DB.workouts = DB.workouts.filter((workout) => {

        if (workout.id === deleteworkout) {
            deletedvalue.push(workout);
            return false;
        }
        return workout.id !== deleteworkout;
    })
    // console.log("mira la basde de datos",DB.workouts);
    saveToDatabase(DB);
    return deletedvalue;
}

module.exports = { getOneWorkout, getAllWorkouts, createNewWorkout, updateAworkout, deleteOneworkout };