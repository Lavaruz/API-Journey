const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("mahasiswa.db", (err) => {
  if (!err) return console.log("connect to db");
});

module.exports = db;
