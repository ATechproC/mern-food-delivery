const express = require("express");
const {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/ProductController");

const router = express.Router();

router.post("/add-product", addProduct);

router.get("/", getAllProducts);

router.get("/:id", getOneProduct);

router.put("/update/:id", updateProduct);

router.delete("/delete-product/:id", deleteProduct);

module.exports = router;