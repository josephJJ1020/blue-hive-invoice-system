import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [
      {
        number: "1335Z9",
        date: "2017-10-10",
        customerLastName: "Fernando",
        products: [
          { name: "Item1", qty: 1, price: "10 PHP" },
          { name: "Item2", qty: 1, price: "10 PHP" },
        ],
        total: "20 PHP",
        status: "PENDING",
      },
      {
        number: "1335Z9",
        date: "2017-10-10",
        customerLastName: "Fernando",
        products: [
          { name: "Item1", qty: 1, price: "10 PHP" },
          { name: "Item2", qty: 1, price: "10 PHP" },
        ],
        total: "20 PHP",
        status: "PENDING",
      },
    ],
    activeInvoiceId: null,
  },
  reducers: {
    // action.payload contains array of invoices
    setInvoices: (state, action) => {
      state.invoices = action.payload;
    },

    // action.payload contains payload id/number; used for editing and deleting invoice
    setActiveInvoiceId: (state, action) => {
      state.activeInvoiceId = action.payload;
    },
  },
});

export const { setInvoices, setActiveInvoiceId } = invoiceSlice.actions;
export default invoiceSlice.reducer;
