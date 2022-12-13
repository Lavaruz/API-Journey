const router = require('express').Router();
const connection = require('../config/connect');
const Mahasiswa = require('../controller/mahasiswaController');

/* GET home page. */
router.get('/', Mahasiswa.getAllMahasiswa);
router.post('/', Mahasiswa.insertMahasiswa);

router.get('/:nama', Mahasiswa.getMahasiswaByName);
router.put('/:nama', Mahasiswa.updateMahasiswaByName);
router.delete('/:nama', Mahasiswa.deleteMahasiswaByName);

module.exports = router;
