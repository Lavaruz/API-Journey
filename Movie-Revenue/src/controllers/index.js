const Movie = require("../model/movie");
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
        row.id = +row.id;
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

async function getAllMovies(req, res, next) {
  let totalItems;
  let page = req.query.page || 1;
  let limit = req.query.limit || 5;
  await Movie.countDocuments()
    .then(async (count) => {
      totalItems = count;
      return await Movie.find({}, "-_id -__v")
        .skip((page - 1) * limit)
        .limit(limit)
        .sort("id");
    })
    .then((result) => {
      res.json({
        data: result,
        limit,
        page,
        totalItems,
      });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  addNewMovies,
  loadMovie,
  getAllMovies,
};
