const { Workout, User } = require("../models");

module.exports = {
  async getWorkoutsByUser(req, res) {
    try {
      const data = await Workout.find({ userId: req.params.userId });
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getPremadeWorkouts(req, res) {
    try {
      const data = await Workout.find({ premade: true }).populate("exercises");
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getWorkouts(req, res) {
    try {
      const data = await Workout.find({ premade: false }).populate("exercises");
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createWorkout(req, res) {

    console.log(req.user._id);
    
    try {
      const data = await Workout.create(req.body);

      await User.findOneAndUpdate(
        { _id: req.user._id },
        { $addToSet: { workoutHistory: data._id } },
        { runValidators: true, new: true }
      );
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleWorkout(req, res) {
    try {
      const data = await Workout.findOne({
        _id: req.params.workoutId,
      }).populate("exercises");
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateWorkout(req, res) {
    try {
      const data = await Workout.findOneAndUpdate(
        { _id: req.params.workoutId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteWorkout(req, res) {
    try {
      const data = await Workout.findOneAndDelete({
        _id: req.params.workoutId,
      });
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
