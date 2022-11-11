import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    error: "",
    info: "",
    editingInvoice: false,
    addingInvoice: false,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setEditingInvoiceTrue: (state) => {
      state.editingInvoice = true;
    },
    setEditingInvoiceFalse: (state) => {
      state.editingInvoice = false;
    },
    setAddingInvoiceTrue: (state) => {
      state.addingInvoice = true;
    },
    setAddingInvoiceFalse: (state) => {
      state.addingInvoice = false;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const {
  setError,
  setEditingInvoiceTrue,
  setEditingInvoiceFalse,
  setAddingInvoiceTrue,
  setAddingInvoiceFalse,
  setInfo,
} = globalSlice.actions;
export default globalSlice.reducer;
