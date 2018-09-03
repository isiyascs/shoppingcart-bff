const express = require('express');
const productsRoute = require('./products.route');
const basketRoute = require('./basket.route');

const router = express.Router();


router.use('/products',productsRoute);
router.use('/basket',basketRoute);

module.exports = router;
