const indexRouter = require("express").Router();
const movieController = require("../controllers/movies");

indexRouter.get("/movies", movieController.getAllMovies);
indexRouter.post("/movie", movieController.postNewMovies);

module.exports = indexRouter;
