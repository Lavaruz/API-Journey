const express = require("express");
const app = express();
const connect = require("./service/connnect");

const indexRouter = require("./src/router/index");

app.use(express.json());

app.use("/", indexRouter);

connect();
app.listen(3000, () => console.log("server run at port 3000"));
