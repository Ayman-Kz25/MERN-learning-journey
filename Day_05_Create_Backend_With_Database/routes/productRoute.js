const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.post("/", productController.addProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.removeProductById);

module.exports = router;
