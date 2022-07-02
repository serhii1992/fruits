import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goodsSlice";
import cartReducer from "./cartSlice";
import calcTotalReducer from "./calcTotalSlice";

export const store = configureStore({
  reducer: {
    goodsReducer,
    cartReducer,
    calcTotalReducer,
  },
});
