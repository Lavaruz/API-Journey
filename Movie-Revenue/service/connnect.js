const mongoose = require("mongoose");

async function connect() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("localhost:27017/movieDB", () => {
    console.log("connect to db");
  });
}

module.exports = connect;
