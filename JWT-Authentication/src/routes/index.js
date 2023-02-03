const indexRouter = require("express").Router();
const indexController = require("../controllers/index");

indexRouter.post("/register", indexController.registerUser);

indexRouter.post("/login", (req, res) => {
  res.json("LOGIN");
});

indexRouter.get("/profile", (req, res) => {
  res.json("PROFILE");
});

module.exports = indexRouter;
