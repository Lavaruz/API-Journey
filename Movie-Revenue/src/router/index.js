const indexRouter = require("express").Router();
const movieController = require("../controllers/index");

indexRouter.get("/", movieController.getAllMovies);

module.exports = indexRouter;
