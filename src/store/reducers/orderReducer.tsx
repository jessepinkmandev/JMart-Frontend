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
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);
//

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
  extraReducers: (builder) => {},
});

export default orderReducer.reducer;
export const { messageClear } = orderReducer.actions;
