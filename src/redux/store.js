import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./slices/aothorSlice";
import authReducer from "./slices/authSlice";

export default configureStore({
  reducer: {
    auths: authReducer,
    authors: authorReducer,
  },
});
