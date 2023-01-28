const mongoose = require("mongoose");

async function connect() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/movie-revenue");
}

module.exports = connect;
