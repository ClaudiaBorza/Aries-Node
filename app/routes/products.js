'use strict'

const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/products');
const serviceCtrl = require('../controllers/common');

router.post('/products', productCtrl.createProduct);
router.get('/products', productCtrl.getProducts,  serviceCtrl.responseToJSON('products'));
router.get('/products-query', productCtrl.getProductsWithUser);
router.delete('/products', productCtrl.deleteAllProducts);
router.delete('/products/:id', productCtrl.deleteProductById);


module.exports = router;
