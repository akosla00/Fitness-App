const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    muscle: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    reps: {
        type: Number
    },
  },
);

const Exercise = model('exercise', exerciseSchema);

module.exports = Exercise;