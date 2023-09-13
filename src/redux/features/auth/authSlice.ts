import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const { accessToken, ...userInfo } = action.payload;
      state.user = userInfo;
    },
    userLoggedOut: (state) => {
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
