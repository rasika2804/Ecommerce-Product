const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const category = mongoose.model('categoryDetail', CategorySchema);

exports.addNewCategory = (categoryDetails) => category.create(categoryDetails);

exports.getAllCategory = () => category.find();

exports.updateCategory = (id, categoryName) => category.findOneAndUpdate({_id: id}, {name: categoryName});

exports.model = CategorySchema;