import { createSlice } from "@reduxjs/toolkit";

export const sweetAlertSlice = createSlice({
  name: "sweetAlert",
  initialState: {
    show: false,
    title: "Demo",
    text: "SweetAlert in React",
    icon: "warning",
  },

  reducers: {
    showAlert: (state, action) => {
      state.show = true;
      state.title = action.payload.title;
      state.text = action.payload.text;
      state.icon = action.payload.icon;
    },
    hideAlert: (state, action) => {
      state.show = false;
      state.title = "";
      state.text = "";
      state.icon = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { showAlert, hideAlert } = sweetAlertSlice.actions;

export default sweetAlertSlice.reducer;
