const indexRouter = require("express").Router();
const Movie = require("../model/movie.model");

indexRouter.get("/", async (req, res) => {
  res.json(await Movie.getAllMovies());
});

module.exports = indexRouter;
