const mongoose = require("mongoose");

async function connectDb() {
  await mongoose
    .connect("mongodb://localhost:27017/swagger-test")
    .then(console.log("connect to db"));
}

module.exports = {
  connectDb,
};
