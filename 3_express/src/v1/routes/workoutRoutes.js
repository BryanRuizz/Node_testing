const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
const RecordController = require("../../controllers/RecordController");

router
.get("/",workoutController.getAllWorkouts)
.get("/:workoutId",workoutController.getOneWorkout)
// this is a new route for records
.get("/:workoutId/records",RecordController.getRecordForWorkout)
// 
.post("/",workoutController.createNewWorkout)
.patch("/",workoutController.updateWorkout)
.delete("/:workoutId",workoutController.deleteOneWorkout)

module.exports = router;
