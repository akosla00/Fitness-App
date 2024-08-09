const { Exercise } = require('../models');

module.exports = {
    async getExercises(req, res) {
        try {
            const data = await Exercise.find();
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createExercise(req, res) {
        try {
            const data = await Exercise.create(req.body);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleExercise(req, res) {
        try {
            const data = await Exercise.findOne({ _id: req.params.exerciseId });
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateExercise(req, res) {
        try {
            const data = await Exercise.findOneAndUpdate(
                { _id: req.params.exerciseId },
                { $set: req.body },
                { runValidators: true, new: true }
                );
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteExercise(req, res) {
        try {
            const data = await Exercise.findOneAndDelete({ _id: req.params.exerciseId });
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}