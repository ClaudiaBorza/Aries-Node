'use strict'

const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/products');

router.post('/products', productCtrl.createProduct);
router.get('/products', productCtrl.getProducts);
router.get('/products-query', productCtrl.getProductsWithUser);
router.delete('/products', productCtrl.deleteAllProducts);
router.delete('/products/:id', productCtrl.deleteProductById);


module.exports = router;
