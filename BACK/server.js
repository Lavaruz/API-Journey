const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(3000, () => console.log("server run at port 3000"));
