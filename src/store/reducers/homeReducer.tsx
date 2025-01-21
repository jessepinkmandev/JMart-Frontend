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

export const price_range_products = createAsyncThunk(
  "product/price_range_products",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/price-range-latest-product");
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const query_products = createAsyncThunk(
  "product/query_products",
  async (query, { fulfillWithValue }) => {
    const { low, high, category, rating, sortPrice, pageNumber } = query;
    try {
      const { data } = await api.get(
        `/home/query-products?category=${category}&&rating=${rating}&&lowPrice=${low}&&highPrice=${high}&&sortPrice=${sortPrice}&&pagenumber=${pageNumber}`
      );
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
    totalProduct: 0,
    perpage: 3,
    latest_product: [],
    topRatedProducts: [],
    discountProducts: [],
    priceRange: {
      low: 0,
      high: 100,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.categorys = payload.categorys;
      })
      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.latest_products = payload.latest_product;
        state.topRatedProducts = payload.topRatedProducts;
        state.discountProducts = payload.discountProducts;
      })
      .addCase(price_range_products.fulfilled, (state, { payload }) => {
        state.priceRange = payload.priceRange;
        state.latest_product = payload.latest_product;
      })
      .addCase(query_products.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.totalProduct = payload.totalProduct;
        state.perpage = payload.perpage;
      });
  },
});

export default homeReducer.reducer;
