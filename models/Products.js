const mongoose = require("mongoose");

const Products = mongoose.model("Products", {
  priceInCents: Number,
  name: String,
});

module.exports = Products;
