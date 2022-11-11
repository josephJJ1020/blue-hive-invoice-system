const mongoose = require("mongoose");
const validatePrice = require("./validators.product/validatePrice");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please enter a product name",
  },

  price: {
    type: Number,
    required: "Please enter a product amount",
    validate: {
      validator: validatePrice,
      message: "Please enter a price greater than 0",
    },
  },
});

module.exports = ProductSchema;
