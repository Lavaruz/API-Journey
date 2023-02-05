const indexRouter = require("express").Router();
const indexController = require("../controllers/index");
const { verifyToken } = require("../../services/jwt");

indexRouter.post("/register", indexController.registerUser);

indexRouter.post("/login", indexController.loginUser);

indexRouter.get("/profile", verifyToken, (req, res) => {
  res.json("PROFILE");
});

module.exports = indexRouter;
