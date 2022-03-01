const express = require('express');

const app = express();

app.use('/', require('./serve1.js'));

module.exports = app;