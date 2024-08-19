const { Schema, model } = require('mongoose');
const dayjs = require('dayjs')

const workoutSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'exercise'
        }
    ],
    sets: {
        type: Number,
        required: true
    },
    start_time: {
        type: Date,
        default: Date.now,
        get: timestamp => dayjs(timestamp).format("MM/DD/YYYY, h:mm A")
    },
    end_time: {
        type: Date,
        default: Date.now,
        get: timestamp => dayjs(timestamp).format("MM/DD/YYYY, h:mm A")
    },
    premade: {
      type: Boolean,
      default: false
    }
  },
   // set this to use virtual below
   {
    toJSON: {
      virtuals: true,
    },
  }
);

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
workoutSchema.virtual('workoutDuration').get(function () {
    return this.end_time - this.start_time;
  });

const Workout = model('workout', workoutSchema);

module.exports = Workout;
