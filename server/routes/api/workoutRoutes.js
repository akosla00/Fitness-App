const router = require('express').Router();
const {
    getWorkoutsByUser,
    createWorkout,
    updateWorkout,
    getSingleWorkout,
    deleteWorkout,
} = require('../../controllers/workoutController.js');

router.route('/').post(createWorkout);

router.route('/:userId').get(getWorkoutsByUser).put(updateWorkout);

router.route('/:userId/:workoutId').get(getSingleWorkout).delete(deleteWorkout);

module.exports = router;