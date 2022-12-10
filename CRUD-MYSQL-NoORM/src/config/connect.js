const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'noorm',
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect to db');
    }
});

module.exports = connection;
