const { User } = require('../models');

module.exports = {
    async getSingleUser(req, res) {
        try {
            const data = await User.findOne({ _id: req.params.userId }).populate('favoriteExercises').populate('workoutHistory');
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const data = await User.create(req.body);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const data = await User.findOneAndUpdate(
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
            const data = await User.findOneAndDelete({ _id: req.params.userId });
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}