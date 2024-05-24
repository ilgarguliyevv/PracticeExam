const Clock = require("../models/clockModels.js");

const getAllClock = async (req, res) => {
  try {
    const allClock = await Clock.find({});
    res.send(allClock);
  } catch (error) {
    res.send(error);
  }
};

const getClockById = async (req, res) => {
  try {
    const { id } = req.params;
    const getById = await Clock.findById({ _id: id });
    res.send(getById);
  } catch (error) {
    res.send(error);
  }
};

const getClockDelete = async (req, res) => {
  try {
    const { id } = req.params;
    getDeleted = await Clock.findOneAndDelete({ _id: id });
    res.send(getDeleted);
  } catch (error) {
    res.send(error);
  }
};

const postClock = async (req, res) => {
  try {
    const obj = req.body;
    const newClock = new Clock(obj);
    newClock.save();
    res.send(newClock);
  } catch (error) {
    res.send(error);
  }
};

const patchClock = async (req, res) => {
  try {
    const { id } = req.params;
    const editedClock = await Clock.findOneAndUptade({ _id: id });
    res.send(editedClock);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getClockById,
  getAllClock,
  postClock,
  getClockDelete,
  patchClock,
};
