const InvoiceDAO = require("../dao/InvoiceDAO");

class InvoiceController {
  static async apiCreateInvoice(req, res) {
    if (!req.body) return res.json({ error: "No data sent" });

    const { customerName, invoiceProducts } = req.body;

    const invoice = await InvoiceDAO.createInvoice(
      customerName,
      invoiceProducts
    );

    return res.json(invoice);
  }

  static async apiEditInvoice(req, res) {
    if (!req.body) return res.json({ error: "No data sent" });

    const { invoiceNumber, customerName, invoiceProducts } = req.body;

    const updatedInvoice = await InvoiceDAO.editInvoice(
      invoiceNumber,
      customerName,
      invoiceProducts
    );

    return res.json(updatedInvoice);
  }

  static async apiGetInvoices(req, res) {
    if (!req.body) return res.json({ error: "No data sent" });

    /*
    query = {
        firstName = { query: "", sort: [] },
        lastName = { query: "", sort: [] },
        invoiceNumber = { query: null, sort: [] },
        page = 0,
    }
    */
    const { query } = req.body;
    const invoices = await InvoiceDAO.getInvoices(query);

    return res.json(invoices);
  }
}

module.exports = InvoiceController;
