const express = require("express");
// const apicache = require("apicache");

const workoutController = require("../../controllers/workoutController");
const RecordController = require("../../controllers/RecordController");


const router = express.Router();
// const cache = apicache.middleware;


/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router
    .get("/", workoutController.getAllWorkouts)
    // .get("/", cache("2 minutes"), workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout)
    // this is a new route for records
    .get("/:workoutId/records", RecordController.getRecordForWorkout)
    // 
    .post("/", workoutController.createNewWorkout)
    .patch("/", workoutController.updateWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout)

module.exports = router;

// how work the middleare in node js .get("/",  here   ,workoutController.getAllWorkouts)
// well, the place of here is in where the func or middleare is gonna works ex
// if you make a middleare you need to put on there as ,mymiddl,controoller
// and the workflow is enter in every until be there in the end. (end everything with next)
