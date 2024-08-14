const { User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  async getSingleUser(req, res) {
    try {
      const data = await User.findOne({ _id: req.params.userId })
        .populate("favoriteExercises")
        .populate("workoutHistory");
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const data = await User.create(req.body);
      const token = signToken(data);
      res.json({ token, data });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  async login(req, res) {
    try {
      const data = await User.findOne({
        $or: [{ username: req.body.username }, { email: req.body.email }],
      });

      if (!data) {
        console.log(!data, "Data");

        return res
          .status(400)
          .json({ message: "Incorrect email or password, please try again." });
      }

      const validPassword = await data.isCorrectPassword(req.body.password);

      if (!validPassword) {
        console.log(!validPassword, "Password");
        return res.status(400).json({ message: "Wrong password!" });
      }
      const token = signToken(data);
      console.log(token, data);

      res.json({ token, data });
    } catch (err) {
      console.log(err.message);

      res.status(500).json(err.message);
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
};
