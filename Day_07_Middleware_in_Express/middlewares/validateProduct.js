const validateProduct = (req, res, next) => {
    if(!req.body.name || !req.body.price){
        return res.status(400).send("Name and Price required!");
    }
    next();
};

module.exports = validateProduct;