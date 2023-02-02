const express = require("express");
const app = express();
const connect = require("./service/connnect");
const { loadMovie } = require("./src/controllers/movies");
const cors = require("cors");

const moviesRouter = require("./src/router/movies");

const apiV1 = "/api/v1";

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use(`${apiV1}`, moviesRouter);

async function startServer() {
  await connect();
  await loadMovie();
  app.listen(5000, () => console.log("server run at port 3000"));
}

startServer();
