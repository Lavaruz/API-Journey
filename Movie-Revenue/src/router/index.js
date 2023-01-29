const indexRouter = require("express").Router();
const Movie = require("../model/movie.model");

indexRouter.get("/", async (req, res) => {
  const movies = await Movie.getAllMovies();
  const data = {
    movies,
    limit: 10,
    skip: 10,
  };
  res.json(data);
});

module.exports = indexRouter;
