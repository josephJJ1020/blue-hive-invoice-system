import { getInvoices } from "../../../server/dao/InvoiceDAO";

/**
 * Takes in query filters, fetches invoices from the server depending on the filters, and returns an object containing a field named
 * invoices and a value containing the array of invoices
 * @param {object} query -  Query filters for invoice query
 * @returns {object} object containing an array of invoices
 */
const fetchInvoices = async ({
  firstName = { query: "", sort: [] },
  lastName = { query: "", sort: [] },
  invoiceNumber = { query: null, sort: [] },
  page = 0,
}) => {
  const data = await fetch(process.env.REACT_APP_GET_INVOICE_URI, {
    body: {
      query: {
        firstName,
        lastName,
        invoiceNumber,
        page,
      },
    },
  });

  const res = await data.json();

  return res;
};

export default fetchInvoices;
