const router = require('express').Router();
const {
    getExercises,
    createExercise,
    updateExercise,
    getSingleExercise,
    deleteExercise,
} = require('../../controllers/exerciseController.js');

router.route('/').get(getExercises).post(createExercise);

router.route('/:exerciseId').get(getSingleExercise).put(updateExercise).delete(deleteExercise);

module.exports = router;