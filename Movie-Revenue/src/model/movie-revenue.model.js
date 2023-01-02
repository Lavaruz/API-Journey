const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const data = [];

function loadMovie() {
  fs.createReadStream(
    path.join(__dirname, "..", "..", "data", "movie-revenue.csv")
  )
    .pipe(parse({ delimiter: ",", columns: true }))
    .on("data", (row) => {
      row.id = +row.id;
      data.push(row);
    })
    .on("end", () => {
      console.log(`${data.length} data found`);
    });
}

loadMovie();
