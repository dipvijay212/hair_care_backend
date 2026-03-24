const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews_count: { type: Number, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String }],
    howToUse: { type: String },
    benefits: [{ type: String }]
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
