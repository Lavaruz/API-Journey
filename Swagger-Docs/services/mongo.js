import mongoose from "mongoose";

async function connectDb() {
  await mongoose
    .connect("mongodb://localhost:27017/swagger-test")
    .then(console.log("connect to db"));
}

export default connectDb;
