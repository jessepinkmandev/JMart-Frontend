import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const place_order = createAsyncThunk(
  "order/place_order",
  async ({
    products,
    price,
    shipping_fee,
    items,
    shippingInfo,
    userId,
    navigate,
  }) => {
    try {
      const { data } = await api.post(`/order/place-order`, {
        products,
        price,
        shipping_fee,
        items,
        shippingInfo,
        userId,
        navigate,
      });
      //   console.log(data);
      navigate("/payment", {
        state: {
          price: price + shipping_fee,
          items,
          orderId: data.orderId,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);
//
export const get_orders = createAsyncThunk(
  "order/get_orders",
  async ({ customerId, status }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/order/get-orders/${customerId}/${status}`
      );
      //   console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//
//
export const get_order_details = createAsyncThunk(
  "order/get_order_details",
  async (orderId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/order/get-order-details/${orderId}`);
      //   console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//

export const orderReducer = createSlice({
  name: "order",
  initialState: {
    myOrders: [],
    errorMessage: "",
    successMessage: "",
    myOrder: {},
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_orders.fulfilled, (state, { payload }) => {
        state.myOrders = payload.orders;
      })
      .addCase(get_order_details.fulfilled, (state, { payload }) => {
        state.myOrder = payload.order;
      });
  },
});

export default orderReducer.reducer;
export const { messageClear } = orderReducer.actions;
