const connection = require('../config/connect');

function createTable(req, res) {
    connection.execute(
        'CREATE TABLE dosen (id INT AUTO_INCREMENT PRIMARY KEY, nama VARCHAR(255), gelar VARCHAR(255))',
        (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
}

function showTable(req, res) {
    connection.execute('SHOW TABLES', (err, tables) => {
        result = tables.map((table) => {
            return Object.assign(table, {
                link: `http://localhost:3000/api/${table.Tables_in_noorm}`,
            });
        });
        res.send(result);
    });
}

function dropTableByName(req, res) {
    connection.execute(`DROP TABLE ${req.params.nama}`, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}

module.exports = {
    createTable,
    showTable,
    dropTableByName,
};
