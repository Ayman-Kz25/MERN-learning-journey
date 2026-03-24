const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");
const validateProduct = require("../middlewares/validateProduct");

router.get("/", productController.getProducts);
router.post("/", validateProduct, productController.addProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.removeProductById);

module.exports = router;
