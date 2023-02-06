const indexRouter = require("express").Router();
const indexController = require("../controllers/index");
const { verifyToken } = require("../../services/jwt");

indexRouter.post("/register", indexController.registerUser);

indexRouter.post("/login", indexController.loginUser);

indexRouter.post("/token", indexController.refreshToken);

indexRouter.get("/profile", verifyToken, (req, res) => {
  res.json({ sessionData: req.user.email, status: "success" });
});

indexRouter.get("/logout", verifyToken, (req, res) => {
  res.clearCookie("access-token");
  res.json("LOGGING OUT");
});

module.exports = indexRouter;
