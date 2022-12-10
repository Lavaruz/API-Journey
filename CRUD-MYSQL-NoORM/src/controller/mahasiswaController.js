const connection = require('../config/connect');

function getAllMahasiswa(req, res) {
    connection.execute('SELECT * FROM mahasiswa', (err, result) => {
        res.send(result);
    });
}
function getMahasiswaById(req, res) {
    connection.execute(
        'SELECT * FROM mahasiswa WHERE {} = {}',
        (err, result) => {
            res.send(result);
        }
    );
}

module.exports = {
    getAllMahasiswa,
};
