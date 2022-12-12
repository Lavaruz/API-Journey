const express = require('express');
const app = express();

// ROUTE
const mahasiswa = require('./src/routes/mahasiswa');
const table = require('./src/routes/table');
const index = require('./src/routes/index');

app.use(express.json());

app.use('/api/mahasiswa', mahasiswa);
app.use('/api/tables', table);
app.use('/', index);

module.exports = app;
