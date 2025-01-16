import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_category = createAsyncThunk(
  "product/get_category",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/get-categorys");
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const get_products = createAsyncThunk(
  "product/get_products",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/get-products");
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const homeReducer = createSlice({
  name: "home",
  initialState: {
    categorys: [],
    products: [],
    latestProducts: [],
    topRatedProducts: [],
    discountProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get_category.fulfilled, (state, { payload }) => {
      state.categorys = payload.categorys;
    });
    builder.addCase(get_products.fulfilled, (state, { payload }) => {
      state.products = payload.products;
      state.latestProducts = payload.latestProducts;
      state.topRatedProducts = payload.topRatedProducts;
      state.discountProducts = payload.discountProducts;
    });
  },
});

export default homeReducer.reducer;
