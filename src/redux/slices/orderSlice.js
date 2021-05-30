import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [] ,
  },

  reducers: {
    allOrder: (state, action) => {
        state.order.push(action.payload);
    }
  },
});

// Action creators are generated for each case reducer function
export const {allOrder} = orderSlice.actions;

export default orderSlice.reducer;