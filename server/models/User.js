const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number
    },
    // set workoutHistory to be an array of ids from the workout schema
    workoutHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'workout'
        }
    ],
    // set favorite exercises to be an array of ids from the exercise schema
    favoriteExercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'exercise'
        }
    ]
    
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('workoutCount').get(function () {
  return this.workoutHistory.length;
});

const User = model('user', userSchema);

module.exports = User;
