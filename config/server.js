const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());

module.exports = app;
