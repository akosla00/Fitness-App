const { Workout, User } = require('../models');

module.exports = {
    async getWorkoutsByUser(req, res) {
        try {
            const data = await Workout.find({ userId: req.params.userId });
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createWorkout(req, res) {
        try {
            const data = await Workout.create(req.body);
            await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { workoutHistory: data._id }},
                { runValidators: true, new: true }
            )
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleWorkout(req, res) {
        try {
            const data = await Workout.findOne({ _id: req.params.workoutId }).populate('exercises');
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
            const data = await Workout.findOneAndDelete({ _id: req.params.workoutId });
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}