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
      // console.log(data);
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
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

//
export const product_details = createAsyncThunk(
  "product/product_details",
  async (slug, { fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/home/product-details/${slug}`);
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

//

export const query_products = createAsyncThunk(
  "product/query_products",
  async (query, { fulfillWithValue }) => {
    const { low, high, category, rating, sortPrice, pageNumber, searchValue } =
      query;
    try {
      const { data } = await api.get(
        `/home/query-products?category=${category}&&rating=${rating}&&lowPrice=${low}&&highPrice=${high}&&sortPrice=${sortPrice}&&pagenumber=${pageNumber}&&searchValue=${
          searchValue ? searchValue : ""
        }`
      );
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

//
export const customer_review = createAsyncThunk(
  "product/customer_review",
  async (info, { fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/home/customer/submit-review`, info);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

//
export const get_review = createAsyncThunk(
  "product/get_review",
  async ({ productId, pageNumber }, { fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/home/customer/get-review/${productId}?pageNumber=${pageNumber}`
      );
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

//

export const homeReducer = createSlice({
  name: "home",
  initialState: {
    categorys: [],
    products: [],
    product: {},
    relatedProduct: [],
    moreProduct: [],
    totalProduct: 0,
    perpage: 3,
    latest_product: [],
    topRatedProducts: [],
    discountProducts: [],
    errorMessage: "",
    successMessage: "",
    totalReview: 0,
    rating_review: [],
    reviews: [],
    priceRange: {
      low: 0,
      high: 100,
    },
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.categorys = payload.categorys;
      })
      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.latest_product = payload.latest_product;
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
      })
      .addCase(product_details.fulfilled, (state, { payload }) => {
        state.product = payload.product;
        state.relatedProduct = payload.relatedProduct;
        state.moreProduct = payload.moreProduct;
      })
      .addCase(customer_review.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
      })
      .addCase(get_review.fulfilled, (state, { payload }) => {
        state.reviews = payload.reviews;
        state.totalReview = payload.totalReview;
        state.rating_review = payload.rating_review;
      });
  },
});

export default homeReducer.reducer;
export const { messageClear } = homeReducer.actions;
