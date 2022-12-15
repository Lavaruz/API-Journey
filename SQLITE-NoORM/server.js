const express = require("express");
const app = express();

// ROUTER
const indexRouter = require("./src/router/index");

app.use(express.json());

app.use("/api", indexRouter);

app.listen(3000, () => console.log("server run at port 3000"));
