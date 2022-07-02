import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// create the thunk
export const fetchGoods = createAsyncThunk(
  "godds/fetchGoods",
  async (options, { rejectWithValue }) => {
    try {
      const category = options !== "all" ? `?category=${options} ` : ``;
      const { data } = await axios.get(
        `https://62b1d472c7e53744afc23bf8.mockapi.io/fruits${category}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: "loading",
  eror: null,
  goods: [],
  category: ["all", "fruit", "vegetables"],
  selectedCategory: "all",
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

    [fetchGoods.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { setSelectedCategory } = goodsSlice.actions;

export default goodsSlice.reducer;
