const { Workout } = require('../models');

module.exports = {
    async getWorkoutsByUser(req, res) {
        try {
            const data = Workout.findOne({ _id: req.params.userId });
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createWorkout(req, res) {
        try {
            const data = Workout.create(req.body);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const data = User.findOneAndupdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
                );
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const data = User.findOneAndDelete({ _id: req.params.userId });
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}