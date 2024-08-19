const { User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      })
      .populate("favoriteExercises")
      .populate("workoutHistory");

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
    // try {
    //   const data = await User.findOne({ _id: req.params.userId })
    //     .populate("favoriteExercises")
    //     .populate("workoutHistory");
    //   res.json(data);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
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

  async updateUser({ user, body }, res) {
    try {
      const data = await User.findOneAndUpdate(
        { _id: user._id },
        { $set: body },
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
