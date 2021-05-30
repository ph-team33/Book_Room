import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./slices/aothorSlice";
import authReducer from "./slices/authSlice";
import dashboardReducer from "./slices/dashboardSlice";
import sweetAlertReducer from "./slices/sweetAlertSlice";

export default configureStore({
  reducer: {
    auths: authReducer,
    authors: authorReducer,
    dashboards: dashboardReducer,
    sweetAlert: sweetAlertReducer,
  },
});
