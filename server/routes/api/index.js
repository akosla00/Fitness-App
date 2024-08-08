const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const workoutRoutes = require('./workoutRoutes.js');
const exerciseRoutes = require('./exerciseRoutes.js');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/exercises', exerciseRoutes);

module.exports = router;