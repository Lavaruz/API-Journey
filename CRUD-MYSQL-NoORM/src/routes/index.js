const router = require('express').Router();
const connection = require('../config/connect');
const Mahasiswa = require('../controller/mahasiswaController');

/* GET home page. */
router.get('/', Mahasiswa.getAllMahasiswa);

module.exports = router;
