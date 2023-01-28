const mongoose = require("mongoose");

async function databaseConnect() {
  await mongoose
    .connect("mongodb://localhost:27017")
    .then(() => console.log("connect to db"));
}

module.exports = databaseConnect;
