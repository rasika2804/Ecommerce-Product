const categoryModel = require('../models/category');

exports.addCategory = async(req, res) => {
    try {
        const categoryDetail = req.body;
        const categoryResult =  await categoryModel.addNewCategory(categoryDetail);
        if(categoryResult){
            res.status(201).send({ message: 'category created successfully' });
        } else {
            res.status(422).send({ message: 'bad created' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

exports.getCategoryDetails = async(req, res) => {
    try {
        const allCategories = await categoryModel.getAllCategory();
        if(allCategories && allCategories.length > 0) {
            res.status(201).send({ success: true, categories: allCategories});
        } else {
            res.status(404).send({message: "data not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

exports.updateCategoryDetails = async(req, res) => {
    try {
        const id = req.params.id;
        const categoryDetail = await categoryModel.updateCategory(id, req.body.name);
        if(categoryDetail){
            res.status(201).send({ message: `category updated successfully for id : ${id}`});
        } else {b
            res.status(422).send({ message: 'failed to update category' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}