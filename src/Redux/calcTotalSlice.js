import { createSlice } from "@reduxjs/toolkit";
import { sum, calcForSale } from "../utils";

const initialState = {
  totalItem: [],
  totalPriceItems: 0,
  totalKgItems: 0,
};

export const calcTotalSlice = createSlice({
  name: "calcTotal",
  initialState,
  reducers: {
    calcTotalItem(state, action) {
      const {coeff,minOrder,name,price} = action.payload
      const {discountCoeff, everyKg}=action.payload?.sale

      const obj = state.totalItem.find((el) => el.name === name);

      if (!obj) {
        const totalKg = +minOrder.toFixed(2)
        const totalPrice = price * totalKg
        state.totalItem = [...state.totalItem, { ...action.payload, totalKg,  totalPrice},
        ];
      } else {
        obj.totalKg = +(obj.totalKg + obj.minOrder * coeff).toFixed(2);
        obj.totalPrice = calcForSale(obj.totalKg, price, everyKg , discountCoeff )
      }
    },
    calcTotalPriceAndKgItems(state) {
      state.totalPriceItems = sum(state.totalItem, "totalPrice");
      state.totalKgItems = sum(state.totalItem, "totalKg");
    },
    removeFromTotalItem(state, action) {
      state.totalItem = state.totalItem.filter((el) => el.name !== action.payload);
    },
  },
});

export const { calcTotalItem, removeFromTotalItem, calcTotalPriceAndKgItems } = calcTotalSlice.actions;

export default calcTotalSlice.reducer;
