const mysql = require('mysql2');
const bluebird = require('bluebird');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'noorm',
    Promise: bluebird,
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect to db');
    }
});

module.exports = connection;
