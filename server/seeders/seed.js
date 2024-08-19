const db = require('../config/connection');
const { Exercise } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');
const { Workout } = require('../models');
const workoutSeeds = require('./workoutSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  // resets counter for autoincrement on id
  Exercise.counterReset('_id', function (err) {
    // Now the counter is 0
    console.log(err)
  });

  await cleanDB('Exercise', 'exercises');
  await cleanDB('Workout', 'workouts')

  // for loop to ensure ids are auto incremented based on order in exerciseSeeds array
  for (let i=0; i < exerciseSeeds.length; i++) {
    await Exercise.create(exerciseSeeds[i]);
  }

  await Workout.create(workoutSeeds);

  console.log('all done!');
  process.exit(0);
});
