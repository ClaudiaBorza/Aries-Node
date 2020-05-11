'use strict'

const Product = require('../models/products');

module.exports.createProduct = createProduct;
module.exports.getProducts = getProducts;
module.exports.deleteAllProducts = deleteAllProducts;
module.exports.deleteProductById = deleteProductById;
module.exports.getProductsWithUser = getProductsWithUser;

function createProduct(req, res, next) {
    const newProduct = new Product(req.body);

    newProduct.save((err, result) => {
        if (err) {
            console.log({message: 'The product could not be created'})
            return {message: 'The product could not be created'}
        }
        return res.json({data: result})
    })
}

function getProducts(req, res, next) {
    Product.find((error, result) => {
        if (error) {
            console.log('error', error)
        }
        return res.json({data: result});
    })
}

function deleteAllProducts(req, res, next) {
    Product.remove((error, result) => {
        if (error) {
            return {message: 'Can not delete all products'}
        }
        return res.json({message: 'Successful delete all products'})
    })
}

function deleteProductById(req, res, next) {
    const productId = req.params.id;
    console.log(productId)
    console.log('req.params', req.params)
    Product.findOneAndDelete({id: productId}, (error, result) => {
        if (error) {
            return {message: `Can not delete product with ${re}`}
        }
        return res.json({message: `Successful delete product with id: ${productId}`})
    })
}


function getProductsWithUser(req, res, next) {
    Product
        .find()
        .populate('user','name email')
        .exec((err, result) => {
            if (err) {
                return next(err)
            }
            res.json({data: result})
        })
}
