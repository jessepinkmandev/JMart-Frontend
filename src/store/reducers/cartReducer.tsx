import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import Wishlist from "./../../components/Dashboard/Wishlist";

export const add_to_cart = createAsyncThunk(
  "cart/add_to_cart",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/cart/add-to-cart", info);
      console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//
export const get_cart_products = createAsyncThunk(
  "cart/get_cart_products",
  async (userId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/cart/get-cart/${userId}`);
      // console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//

export const delete_cart_product = createAsyncThunk(
  "cart/delete_cart_product",
  async (cartId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.delete(`/cart/delete-cart-product/${cartId}`);
      // console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//

export const quantity_increment = createAsyncThunk(
  "cart/quantity_increment",
  async (cartId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.put(`/cart/quantity-increment/${cartId}`);
      // console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//

export const quantity_decrement = createAsyncThunk(
  "cart/quantity_decrement",
  async (cartId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.put(`/cart/quantity-decrement/${cartId}`);
      // console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//

export const add_to_wishlist = createAsyncThunk(
  "cart/add_to_wishlist",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/cart/add-to-wishlist/`, info);
      // console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//
export const get_wishlist = createAsyncThunk(
  "cart/get_wishlist",
  async (userId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/cart/get-wishlist/${userId}`);
      // console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//
export const delete_wishlist = createAsyncThunk(
  "cart/delete_wishlist",
  async (wishlistId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.delete(`/cart/delete-wishlist/${wishlistId}`);
      // console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart_products: [],
    cart_product_count: 0,
    wishlist_products: [],
    wishlist_products_count: 0,
    price: 0,
    shipping_fee: 0,
    outofstock_products: [],
    errorMessage: "",
    successMessage: "",
    buy_product_item: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
    reset_count: (state, _) => {
      state.cart_product_count = 0;
      state.wishlist_products_count = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_to_cart.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
      })
      .addCase(add_to_cart.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.cart_product_count = state.cart_product_count + 1;
      })
      .addCase(get_cart_products.fulfilled, (state, { payload }) => {
        state.cart_products = payload.cart_products;
        state.price = payload.price;
        state.cart_product_count = payload.cart_product_count;
        state.shipping_fee = payload.shipping_fee;
        state.buy_product_item = payload.buy_product_item;
        state.outofstock_products = payload.outofstock;
      })
      .addCase(delete_cart_product.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
      })
      .addCase(quantity_increment.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
      })
      .addCase(quantity_decrement.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
      })
      .addCase(add_to_wishlist.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
      })
      .addCase(add_to_wishlist.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.wishlist_products_count =
          state.wishlist_products_count > 0
            ? state.wishlist_products_count + 1
            : 1;
      })
      .addCase(get_wishlist.fulfilled, (state, { payload }) => {
        state.wishlist_products = payload.wishlist;
        state.wishlist_products_count = payload.wishlistCount;
      })
      .addCase(delete_wishlist.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.wishlist_products = state.wishlist_products.filter(
          (p) => p._id !== payload.wishlistId
        );
        state.wishlist_products_count = state.wishlist_products_count - 1;
      });
  },
});

export default cartReducer.reducer;
export const { messageClear, reset_count } = cartReducer.actions;
