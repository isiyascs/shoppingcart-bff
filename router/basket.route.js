const express = require('express');
// const validate = require('express-validation');
const controller = require('../controller/basket.controller.js');

const router = express.Router();

router
  .route('/')
  .get(controller.pickBucket)
  .post(controller.fillBucket);

  module.exports = router;
