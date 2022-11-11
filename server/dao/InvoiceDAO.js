const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const InvoiceSchema = require("../schema/Invoice");

const Invoice = mongoose.model("Invoice", InvoiceSchema);

const PAGE_LIMIT = 20;
const DEFAULT_SORT = [["date", 1]];

class InvoiceDAO {
  static async createInvoice(customerName, invoiceProducts) {
    try {
      const invoice = new Invoice({
        customerFirstName: customerName.firstName,
        customerLastName: customerName.lastName,
        products: invoiceProducts,
        totalInvoiceAmount: invoiceProducts
          .map((product) => product.price)
          .reduce((prev, next) => prev + next),
      });

      await invoice.save();
      return invoice;
    } catch (err) {
      return { error: "Error creating invoice" };
    }
  }

  static async editInvoice(invoiceNumber, customerName, invoiceProducts) {
    try {
      const invoice = await Invoice.findOneAndUpdate(
        { number: invoiceNumber },
        {
          customerFirstName: customerName.firstName,
          customerLastName: customerName.lastName,
          products: invoiceProducts,
          totalInvoiceAmount: invoiceProducts
            .map((product) => product.price)
            .reduce((prev, next) => prev + next),
        },
        { new: true }
      );

      await invoice.save();
      return invoice;
    } catch (err) {
      return { error: "Error in editing invoice" };
    }
  }

  static async getInvoices({
    firstName = { query: "", sort: [] },
    lastName = { query: "", sort: [] },
    invoiceNumber = { query: null, sort: [] },
    page = 0,
  } = {}) {
    let query = {};
    let sort = DEFAULT_SORT;

    if (invoiceNumber && invoiceNumber.query > 0) {
      query.number = invoiceNumber;
      if (invoiceNumber.sort) sort.push(invoiceNumber.sort);
    }

    if (firstName && firstName.query.length) {
      query.customerFirstName = firstName;
      if (firstName.sort) sort.push(firstName.sort);
    }

    if (lastName && lastName.query.length) {
      query.customerLastName = lastName;
      if (lastName.sort) sort.push(lastName.sort);
    }

    try {
      const invoices = await Invoice.find(query)
        .sort(sort)
        .limit(page * PAGE_LIMIT); //

      return { invoices };
    } catch (err) {
      return { error: "Error getting invoices" };
    }
  }

  /**
   * Deletes invoice from db using its id/number
   * @param {string} invoiceId - invoice id/number string
   */
  static async deleteInvoice(invoiceId) {
    try {
      const deletedInvoice = await Invoice.findOneAndDelete({
        number: invoiceId,
      });

      return deletedInvoice;
      
    } catch (err) {
      return { error: "Failed to delete invoice" };
    }
  }
}

module.exports = InvoiceDAO;
