const express = require("express");
const app = express();

const databaseConnect = require("./services/mongo");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});

async function startServer() {
  await databaseConnect();
  app.listen(3000, () => console.log("server run at port 3000"));
}
startServer();
