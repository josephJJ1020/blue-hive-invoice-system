const mongoose = require("mongoose");
const Product = require("./Product");

// const validateQuantity = require("./validators.invoice/validateQuantity");
const validatePrice = require("./validators.product/validatePrice");

const InvoiceSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: "Please enter an invoice number.",
  },
  dateCreated: {
    type: Number,
    default: Date.now(),
  },
  lastUpdated: {
    type: Number,
    default: Date.now(),
  },
  customerFirstName: {
    type: String,
    required: "Please enter a customer first name.",
  },
  customerLastName: {
    type: String,
    required: "Please enter a customer last name.",
  },
  products: {
    type: [Object],
    validate: [
      (products) => {
        if (products.length) return true;
        return false;
      },
      "Please enter at least one product",
    ],
  },
  status: {
    type: String,
    required: "Please enter invoice status",
  },

  totalInvoiceAmount: {
    type: Number,
    required: "Please enter total invoice amount.",
    validate: {
      validator: validatePrice,
      message: "Please enter an amount greater than 0.",
    },
  },
});

module.exports = InvoiceSchema;
