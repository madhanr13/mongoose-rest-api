const User = require("../models/userModels.js");

const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "User already exist" });
    }
    const savedUser = await userData.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(404).json({ error: "Something went wrong" });
  }
};

const fetch = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.status(404).json({ error: "no users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      res.status(404).json({ message: "User not found" });
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body);
    return res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(userExist);
    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { fetch, create, update, deleteUser };
