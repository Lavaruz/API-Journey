const indexRouter = require("express").Router();

indexRouter.get("/", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = indexRouter;
