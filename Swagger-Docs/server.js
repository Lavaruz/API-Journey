const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(cors());

const { connectDb } = require("./services/mongo");

app.get("/", (req, res) => {
  res.json("OK");
});

async function startServer() {
  await connectDb();
  app.listen(3000, () => {
    console.log("server run at port 3000");
  });
}
startServer();
