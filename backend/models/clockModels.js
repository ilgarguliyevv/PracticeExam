const mongoose = require("mongoose");

const clockSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
});

module.exports = mongoose.model("Clock", clockSchema);
