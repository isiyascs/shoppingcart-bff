const express = require('express');
// const validate = require('express-validation');
const controller = require('../controller/products.controller.js');

const router = express.Router();

router
  .route('/')
  .get(controller.getProducts);

module.exports = router;
