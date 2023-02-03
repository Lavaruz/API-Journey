const mongoose = require("mongoose");

async function databaseConnect() {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect("mongodb://localhost:27017/user")
    .then(() => console.log("connect to db"));
}

module.exports = {
  databaseConnect,
};
