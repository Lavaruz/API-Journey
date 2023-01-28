const express = require("express");
const app = express();

const databaseConnect = require("./services/mongo");

const indexRouter = require("./src/routes/index");

app.use(express.json());

app.use("/", indexRouter);

async function startServer() {
  await databaseConnect();
  app.listen(3000, () => console.log("server run at port 3000"));
}
startServer();
