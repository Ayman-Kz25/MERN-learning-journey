const product = require("../models/productModel")

exports.getProducts = async (req, res) => {
    const products = await product.find();

    
}