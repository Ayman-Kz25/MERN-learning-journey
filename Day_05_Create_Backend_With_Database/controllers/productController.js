const Product = require("../models/productModel")

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(404).send("server error");
    }

}

exports.addProducts = async (req, res) => {
    const product = new Product(req.body);

    await product.save();

    res.send({
        message: "Product added",
        data: product,
    });
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).send("Product not found!");
    }

    res.send(product);
};

exports.removeProductById = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).send({
        message: "Product removed successfully!"
    });
};