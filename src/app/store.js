import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/ProductSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});
