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

module.exports = {
    getAllMahasiswa,
    insertMahasiswa,
};
