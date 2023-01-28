const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nama: String,
  kelas: String,
  jurusan: String,
});

module.exports = mongoose.model("User", userSchema);
