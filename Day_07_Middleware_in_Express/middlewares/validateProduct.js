const validateProduct = (req, res, next) => {
    console.log(req.body);
    if(!req.body.name || req.body.price===undefined){
        return res.status(400).send({
            message: "Name and Price required!"
        });
    }
    next();
};

module.exports = validateProduct;