/**
 * product Schema
 */

// importing all required modules

const Category = require('./category');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    color: {
        type: String,
        enum: ['red', 'blue']
    },
    price: {
        type: String
    },
    categoryId: {
        type: String
    }
})

const product = mongoose.model('productDetails', ProductSchema);

exports.addNewProduct = (productDetails) => product.create(productDetails);

exports.getAllProductDetails = () => product.find();

exports.getProductByCategory = (id) => product.find({categoryId: id});  
                                                    //   .populate('categoryId')
                                                    //   .exec()
                                                    //   .then(data => {
                                                    //     return data;
                                                    // });

exports.model = ProductSchema;