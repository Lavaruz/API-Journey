var express = require("express");

const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "noorm",
});

connection.query("SELECT * FROM mahasiswa", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

var app = express();

module.exports = app;
