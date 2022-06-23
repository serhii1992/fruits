import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create the thunk
export const fetchGoods = createAsyncThunk("godds/fetchGoods", async () => {
  const { data } = await axios.get("https://62b1d472c7e53744afc23bf8.mockapi.io/fruits");
  return data
});

const initialState = {
  goods: [],
  status: "loading",
};

export const getGoodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGoods.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },

    [fetchGoods.fulfilled]: (state, action) => {
      state.goods = action.payload;
      state.status = "success";
    },

    [fetchGoods.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    }
  },
});

export const { getGoods } = getGoodsSlice.actions;

export default getGoodsSlice.reducer;
