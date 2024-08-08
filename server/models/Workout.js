const { Schema, model } = require('mongoose');
const dayjs = require('dayjs')

const workoutSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    length: {
        type: Number,
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
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dayjs(timestamp).format("MM/DD/YYYY, h:mm A")
    },
  },
);

const Workout = model('workout', workoutSchema);

module.exports = workoutSchema;