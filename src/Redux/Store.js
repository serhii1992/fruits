import { configureStore } from '@reduxjs/toolkit'
import goodsReducer from './goodsSlice'

export const store = configureStore({
  reducer: {
    goodsReducer,
  },
})


console.log("store", store);