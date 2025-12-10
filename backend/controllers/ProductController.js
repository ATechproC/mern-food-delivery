const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");


exports.addProduct = asyncHandler(async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json({ data: product });
});

exports.getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json({ result: products.length, data: products });
});

exports.getOneProduct = asyncHandler(async (req, res, next) => {

    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
        return next(new ApiError("There is no product for this id", 404));
    }

    res.status(200).json({ data: product });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {

    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!product) {
        return next(new ApiError("There is no product for this id", 404));
    }

    res.status(200).json({ message: "Product updated successfully", data: product })
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {

    const { id } = req.params;

    const product = await Product.findOneAndDelete(id);

    if (!product) {
        return next(new ApiError("There is no product for this id", 404));
    }

    res.status(200).json({ message: "Product deleted successfully" })
});
