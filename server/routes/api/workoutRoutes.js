const router = require('express').Router();
const {
    getWorkoutsByUser,
    createWorkout,
    updateWorkout,
    getSingleWorkout,
    deleteWorkout,
} = require('../../controllers/workoutController.js');

const { authMiddleware } = require('../../utils/auth.js');

router.route('/').post(authMiddleware, createWorkout);

router.route('/:userId').get(getWorkoutsByUser);

router.route('/:workoutId').get(getSingleWorkout).put(authMiddleware, updateWorkout).delete(authMiddleware, deleteWorkout);

module.exports = router;