const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  id: String,
  name: String,
});

module.exports = mongoose.model("Book", bookSchema);
