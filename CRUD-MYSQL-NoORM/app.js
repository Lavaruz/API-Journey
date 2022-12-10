const express = require('express');
const app = express();

// ROUTE
const index = require('./src/routes/index');

app.use(express.json());

app.use('/', index);

module.exports = app;
