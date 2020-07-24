const mongoose = require("mongoose");


var productSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    category : String,
}, {
    collation: "products"
});
exports.productData = mongoose.model("PRODUCT", productSchema);
