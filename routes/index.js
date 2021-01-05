const express = require('express');
const productDetails = require('./products');

const route = express.Router();

route.use('/product-details', productDetails);

module.exports = route;