const { Schema, model } = require('mongoose');
const autoIncrementFactory =  require('mongoose-sequence');
const connection = require('../config/connection')

const autoIncrement = autoIncrementFactory(connection);

const exerciseSchema = new Schema(
  {
    _id: Number,
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
  {
    _id: false
  }
);

// Use autoIncrement plugin
exerciseSchema.plugin(autoIncrement);

const Exercise = model('exercise', exerciseSchema);

module.exports = Exercise;