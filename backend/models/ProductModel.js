const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "product name is required"],
        trim: true,
        minlength: [3, "too short product name"],
        maxlength: [100, "too long product name"]
    },
    slug: {
        type: String,
        trim: true,
        lowercase: true
    },
    image: String,
    description: {
        type: String,
        trim: true,
        required: [true, "product description is required"]
    },
    price: {
        type: String,
        required : [true, "product price is required"]
    },
    category: {
        type: String,
        trim: true,
        required: [true, "product category is required"],
    },
    counter: {
        type: Number,
        default: 0,
        min: [0, "Invalid counter value"]
    }
}, {
    timestamps: true
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = Product;