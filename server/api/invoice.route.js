const { Router } = require("express");
const InvoiceController = require("./invoice.controller");

const invoiceRouter = new Router();

invoiceRouter.route("/create-invoice").post(InvoiceController.apiCreateInvoice);
invoiceRouter.route("/edit-invoice/").post(InvoiceController.apiCreateInvoice);
invoiceRouter.route("/get-invoices/").post(InvoiceController.apiGetInvoices);

module.exports = invoiceRouter;
