import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import globalReducer from "./slices/globalSlice";
import userReducer from "./slices/userSlice";
import invoiceReducer from "./slices/invoiceSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    global: globalReducer,
    user: userReducer,
    invoice: invoiceReducer,
  },
});
