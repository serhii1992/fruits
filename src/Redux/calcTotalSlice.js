import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalItem: [{name: "",  price: 0, totalKg: 0, totalPrice: 0 }],
  totalPriceItems: 0,
  totalKgItems: 0,
};

const sum = (arr, param)=>{
  return  arr.reduce((acc, el)=> acc + el[param], 0)
}

export const calcTotalSlice = createSlice({
  name: "calcTotal",
  initialState,
  reducers: {
    calcTotalItem(state, action) {
      const obj = state.totalItem.find((el) => el.name === action.payload.name);
      if (!obj) {
        state.totalItem = [...state.totalItem, {...action.payload, totalPrice: action.payload.price * action.payload.totalKg}];
      } else {
        obj.totalKg = obj.totalKg + action.payload.totalKg
        obj.totalPrice = obj.totalKg * obj.price
      }
    },

    calcTotalPriceAndKgItems(state) {
      state.totalPriceItems = sum(state.totalItem, 'totalPrice') 
      state.totalKgItems = sum(state.totalItem, 'totalKg') 
    },
    removeFromTotalItem(state, action) {
      state.totalItem = state.totalItem.filter((el) => el.name !== action.payload);
    },
    
  },
});

export const { calcTotalItem,removeFromTotalItem, calcTotalPriceAndKgItems} = calcTotalSlice.actions;

export default calcTotalSlice.reducer;
