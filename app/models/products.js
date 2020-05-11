const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'product name is mandatory'],
        unique: false
    },
    quantity: {
        type: Number,
        required: [true, 'must select a quantity'],
        unique: false
    },
    price: {
        type: Number,
        required: [true, 'must add a price for the product'],
        unique: false
    },
    currency: {
        type: String,
        required: [true, 'currency is mandatory'],
        unique: false
    },
    user: {
        type: ObjectId,
        ref: 'user',
        required: false
    }
})

module.exports = mongoose.model('product', productSchema, 'products')
