const indexRouter = require("express").Router();
const User = require("../model/user.model");

indexRouter.get("/", async (req, res) => {
  let mahasiswa = await User.getAllUser();
  res.json({ mahasiswa });
});

indexRouter.post("/", (req, res) => {
  User.addUser(req.body);
  res.json({ status: "data added" });
});

module.exports = indexRouter;
