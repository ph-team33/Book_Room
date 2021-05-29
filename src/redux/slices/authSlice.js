import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auths",
  initialState: {
    isLoggedIn: false,
    isAdmin: false,
    userInfo: {},
  },

  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setIsAdmin, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
