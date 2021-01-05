const productModel = require('../models/products');

exports.addProducts = async(req, res) => {
    try {
        const productDetail = req.body;
        const productResult =  await productModel.addNewProduct(productDetail);
        if(productResult) {
            res.status(201).send({success: true, message: 'product created successfully'});
        } else {
            res.status(422).send({success: false, message: 'failed to create product'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

exports.getProductDetails = async(req, res) => {
    try {
        const productData = await productModel.getAllProductDetails();
        if(productData && productData.length > 0) {
            res.status(201).send({success: true, products: productData});
        } else {
            res.status(404).send({success: false, message: 'Data not found'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

exports.getProductDetailsByCategory = async(req, res) => {
    try {
        const productData = await productModel.getProductByCategory(req.params.categoryId);
        if(productData && productData.length > 0) {
            res.status(201).send({success: true, products: productData});
        } else {
            res.status(404).send({success: false, message: 'Data not found'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}