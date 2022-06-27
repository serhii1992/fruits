import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goods: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (!state.goods.find((el) => el.name === action.payload.name ) && action.payload.hasOwnProperty('name')) {
        state.goods = [...state.goods, action.payload];
      }
    },
    removeItemIncart(state, action) {
      state.goods = state.goods.filter((el) => el.name !== action.payload);
    },
  },
});

export const { addToCart, removeItemIncart } = cartSlice.actions;

export default cartSlice.reducer;
