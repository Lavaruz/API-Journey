const connection = require('../config/connect');

async function getAllMahasiswa(req, res) {
    await connection.execute('SELECT * FROM mahasiswa', (err, result) => {
        res.json(result);
    });
}

async function insertMahasiswa(req, res) {
    await connection.execute(
        'INSERT INTO mahasiswa (nama, nilai) VALUES (?,?)',
        [req.body.nama, req.body.nilai],
        (err, result) => {
            res.json({
                status: 'new mahasiswa added',
                insertId: result.insertId,
            });
        }
    );
}

function getMahasiswaByName(req, res) {
    connection.execute(
        'SELECT * from mahasiswa WHERE nama = ?',
        [req.params.nama],
        (err, result) => {
            res.json(result);
        }
    );
}

function updateMahasiswaByName(req, res) {
    connection.execute(
        'UPDATE mahasiswa SET nilai = ? WHERE nama = ?',
        [req.body.nilai, req.params.nama],
        (err, result) => {
            res.json(result);
        }
    );
}

module.exports = {
    getAllMahasiswa,
    insertMahasiswa,
    getMahasiswaByName,
    updateMahasiswaByName,
};
