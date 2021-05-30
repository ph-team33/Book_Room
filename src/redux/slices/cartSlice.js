import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const isExist = state.carts.find(
        (item) => item._id === action.payload._id
      );
      if (!isExist) {
        state.carts.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      const newCart = state.carts.filter((item) => item._id !== action.payload);
      state.carts = newCart;
    },
    removeAllFromCart: (state, action) => {
      state.carts = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCart, removeAllFromCart } = cartSlice.actions;

export default cartSlice.reducer;
