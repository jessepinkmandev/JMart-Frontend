import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_dashboard_data = createAsyncThunk(
  "dashboard/get_dashboard_data",
  async (userId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/dashboard/get-dashboard-data/${userId}`);
      //   console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//

//

export const dashboardReducer = createSlice({
  name: "dashboard",
  initialState: {
    recentOrders: [],
    totalOrders: 0,
    pendingOrders: 0,
    cancelledOrders: 0,
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_dashboard_data.fulfilled, (state, { payload }) => {
      state.totalOrders = payload.totalOrder;
      state.pendingOrders = payload.pendingOrder;
      state.cancelledOrders = payload.cancelledOrder;
      state.recentOrders = payload.recentOrder || [];
    });
  },
});

export default dashboardReducer.reducer;
export const { messageClear } = dashboardReducer.actions;
