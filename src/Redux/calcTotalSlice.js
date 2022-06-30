import { createSlice } from "@reduxjs/toolkit";
import { sum, calcForSale } from "../utils";

const initialState = {
  totalItem: [{ name: "", price: 0, totalKg: 0, totalPrice: 0 }],
  totalPriceItems: 0,
  totalKgItems: 0,
};

// coeff: 1
// minOrder: 0.5
// name: "Banana"
// price: 10
// sale: false
// srcImg: "img/banana.jpg"

export const calcTotalSlice = createSlice({
  name: "calcTotal",
  initialState,
  reducers: {
    calcTotalItem(state, action) {
      debugger
      const {coeff,minOrder,name,price} = action.payload
      const {discountCoeff, discountKg, everyKg}=action.payload?.sale

      const obj = state.totalItem.find((el) => el.name === name);

      if (!obj) {
        const totalKg = +minOrder.toFixed(2)
        const totalPrice = price * totalKg
        state.totalItem = [...state.totalItem, { ...action.payload, totalKg,  totalPrice},
        ];
      } else {

        obj.totalKg += +obj.minOrder.toFixed(2) * coeff;

        obj.totalPrice = calcForSale(obj.totalKg, price, discountKg, everyKg , discountCoeff )
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
