import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },

  reducers: {
    allOrder: (state, action) => {
      state.orders = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allOrder } = orderSlice.actions;

export default orderSlice.reducer;
