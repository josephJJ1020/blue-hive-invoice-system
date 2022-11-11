import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    username: "",
  },
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },

    setUsername: (state, action) => {
      state.username = action.payload;
    },

    clearUserData: (state) => {
      state.id = null;
      state.username = "";
    },
  },
});

export const { setUserId, setUsername, clearUserData } = userSlice.actions;
export default userSlice.reducer;
