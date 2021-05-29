import { createSlice } from "@reduxjs/toolkit";

export const authorSlice = createSlice({
  name: "authors",
  initialState: {
    authors: [],
  },

  reducers: {
    setAuthors: (state, action) => {
      state.authors = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthors } = authorSlice.actions;

export default authorSlice.reducer;
