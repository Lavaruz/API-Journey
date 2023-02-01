const express = require("express");
const app = express();
const connect = require("./service/connnect");
const { loadMovie } = require("./src/controllers/movies");

const moviesRouter = require("./src/router/movies");

const apiV1 = "/api/v1";

app.use(express.json());

app.use(`${apiV1}`, moviesRouter);

async function startServer() {
  await connect();
  await loadMovie();
  app.listen(3000, () => console.log("server run at port 3000"));
}

startServer();
