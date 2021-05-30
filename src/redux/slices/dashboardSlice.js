import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboards",
  initialState: {
    users: [],
  },

  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = dashboardSlice.actions;

export default dashboardSlice.reducer;
