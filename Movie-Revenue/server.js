const express = require("express");
const app = express();
const connect = require("./service/connnect");
const { loadMovie } = require("./src/model/movie.model");

const indexRouter = require("./src/router/index");

app.use(express.json());

app.use("/", indexRouter);

async function startServer() {
  await connect();
  await loadMovie();
  app.listen(3000, () => console.log("server run at port 3000"));
}

startServer();
