const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");
const validateProduct = require("../middlewares/validateProduct");
const asyncHandler = require("../utils/asyncHandler");

router.get("/", asyncHandler(productController.getProducts));
router.post("/", validateProduct, asyncHandler(productController.addProducts));
router.get("/:id", asyncHandler(productController.getProductById));
router.delete("/:id", asyncHandler(productController.removeProductById));

module.exports = router;
