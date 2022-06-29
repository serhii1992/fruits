import { createSlice } from "@reduxjs/toolkit";
import { sum, calcForSale } from "../utils";

const initialState = {
  totalItem: [{ name: "", price: 0, totalKg: 0, totalPrice: 0 }],
  totalPriceItems: 0,
  totalKgItems: 0,
};


export const calcTotalSlice = createSlice({
  name: "calcTotal",
  initialState,
  reducers: {
    calcTotalItem(state, action) {
      const obj = state.totalItem.find((el) => el.name === action.payload.name);
      const {discountCoeff, discountKg, everyKg}=action.payload?.sale

      if (!obj) {
        let totalKg = action.payload.minOrder 
        let totalPrice = action.payload.price * totalKg
        state.totalItem = [...state.totalItem, { ...action.payload, totalKg,  totalPrice},
        ];
      } else {
        obj.totalKg += obj.minOrder * action.payload.coeff;
        obj.totalPrice = calcForSale(obj.totalKg, action.payload.price,discountKg, everyKg , discountCoeff  )
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

export const { calcTotalItem, removeFromTotalItem, calcTotalPriceAndKgItems } =
  calcTotalSlice.actions;

export default calcTotalSlice.reducer;
