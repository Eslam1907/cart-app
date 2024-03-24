import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducer'
import cartSlice from "./sliceCart";

export const store = configureStore({
  reducer: {
    products: productSlice ,
    carts: cartSlice,
  },
});
