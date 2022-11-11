import { createSlice } from "@reduxjs/toolkit";
import authStatus from "../../constants/authStatus";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authStatus: authStatus.LOGIN,
  },
  reducers: {
    setAuthToLogin: (state) => {
      state.authStatus = authStatus.LOGIN;
    },
    setAuthToSignup: (state) => {
      state.authStatus = authStatus.SIGNUP;
    },
    setAuthToAuthenticated: (state) => {
      state.authStatus = authStatus.AUTHENTICATED;
    },
  },
});

export const { setAuthToLogin, setAuthToSignup, setAuthToAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
