/**
 * Takes in invoice details, adds it into the database, and returns the new invoice
 * @param {string} customerFirstName - customer's first name string
 * @param {string} customerLastName - customer's last name string
 * @param {object[]} products - array of product objects with {qty, name, price}
 * @returns {object} invoice object
 */
const addInvoice = async (customerFirstName, customerLastName, products) => {
  const URI = process.env.REACT_APP_ADD_INVOICE_URI;

  const data = await fetch(URI, {
    body: {
      customerName: {
        firstName: customerFirstName,
        lastName: customerLastName,
      },
      invoiceProducts: products,
    },
  });

  const newInvoice = await data.json();

  return newInvoice;
};

export default addInvoice;
