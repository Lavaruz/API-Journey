var express = require('express');
var router = express.Router();
const Table = require('../controller/tableController');

/* GET users listing. */
router.get('/', Table.showTable);
router.post('/', Table.createTable);
router.delete('/:nama', Table.dropTableByName);

module.exports = router;
