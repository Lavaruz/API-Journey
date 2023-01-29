const Movie = require("./movie.mongo");
const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

async function loadMovie() {
  return new Promise((resolve, rejects) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "movie-revenue.csv")
    )
      .pipe(parse({ delimiter: ",", columns: true }))
      .on("data", async (row) => {
        Object.assign;
        await addNewMovies(row);
      })
      .on("end", () => {
        resolve();
      });
  });
}

async function addNewMovies(data) {
  return await Movie.findOneAndUpdate(
    {
      id: data.id,
    },
    data,
    { upsert: true }
  );
}

async function getAllMovies() {
  return await Movie.find({}, "-_id -__v", { sort: { _id: 1 }, limit: 10 });
}

module.exports = {
  addNewMovies,
  loadMovie,
  getAllMovies,
};
