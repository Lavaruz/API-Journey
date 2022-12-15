const db = require("../service/connect");

function getAllNilai(req, res) {
  db.all("SELECT * FROM nilai", (err, row) => {
    res.send(row);
  });
}

module.exports = {
  getAllNilai,
};
