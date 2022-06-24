import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create the thunk
export const fetchGoods = createAsyncThunk("godds/fetchGoods", async (options) => {
  let category = (options !== "all") ? `?category=${options} ` : ``
  const { data } = await axios.get(`https://62b1d472c7e53744afc23bf8.mockapi.io/fruits${category}`);

  return data
});

const initialState = {
  status: "loading",
  goods: [],
  category: ["all", "fruit", "vegetables"],
  selectedCategory: "all"
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchGoods.pending]: (state) => {
     
      state.goods = [];
      state.status = "loading";
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

export const { setSelectedCategory } = goodsSlice.actions;

export default goodsSlice.reducer;
