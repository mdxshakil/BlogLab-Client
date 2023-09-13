import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  user: {
    email: "",
    accountStatus: "",
    role: "",
    id: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      const { accessToken, ...userInfo } = action.payload;
      state.accessToken = accessToken;
      state.user = userInfo;
    },
    userLoggedOut: (state) => {
      state.accessToken = "";
      state.user = {
        email: "",
        accountStatus: "",
        role: "",
        id: "",
      };
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
