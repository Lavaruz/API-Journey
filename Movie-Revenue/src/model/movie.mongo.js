const mongoose = require("mongoose");

const movieShcema = new mongoose.Schema({
  id: Number,
  name: String,
  genre: String,
  revenue: String,
});

module.exports = mongoose.model("Movie", movieShcema);
