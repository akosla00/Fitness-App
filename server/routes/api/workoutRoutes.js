const router = require('express').Router();
const {
    getWorkoutsByUser,
    createWorkout,
    updateWorkout,
    getSingleWorkout,
    deleteWorkout,
} = require('../../controllers/workoutController.js');

router.route('/').post(createWorkout);

router.route('/:userId').get(getWorkoutsByUser);

router.route('/:workoutId').get(getSingleWorkout).put(updateWorkout).delete(deleteWorkout);

module.exports = router;