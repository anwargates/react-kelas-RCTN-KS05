import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
