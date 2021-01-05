const ProductController = require('../controller/products');
const CategoryController = require('../controller/category');

const express = require('express');
const route = express.Router();

route.post('/add-product', ProductController.addProducts);

route.get('/get-all-products', ProductController.getProductDetails);

route.get('/get-products/:categoryId', ProductController.getProductDetailsByCategory);

route.post('/add-category', CategoryController.addCategory);

route.get('/get-all-categories', CategoryController.getCategoryDetails);

route.put('/upadte-category/:id', CategoryController.updateCategoryDetails);

module.exports = route;