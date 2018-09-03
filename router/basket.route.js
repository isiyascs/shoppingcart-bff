const express = require('express');
//const { check, validationResult } = require('express-validator/check');
const controller = require('../controller/basket.controller.js');
const validation = require('../middlewares/request.post.validation.js');

const router = express.Router();


router
  .route('/')
  .get(controller.pickBucket)
  .post(validation.validatePostBasketBody,controller.fillBucket);

  module.exports = router;
