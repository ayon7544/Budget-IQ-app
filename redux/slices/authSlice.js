import { createSlice } from "@reduxjs/toolkit";
import { deleteAuthData } from "../../utils/secureStore";


const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      deleteAuthData(); // remove from SecureStore
    },
    loadTokenFromStorage: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, clearToken, loadTokenFromStorage } = authSlice.actions;
export default authSlice.reducer;
