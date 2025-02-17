import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_friend = createAsyncThunk(
  "chat/add_friend",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/chat/add-friend", info);
      //   console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//
export const send_message = createAsyncThunk(
  "chat/send_message",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/chat/send-message", info);
      //   console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//

export const chatReducer = createSlice({
  name: "chat",
  initialState: {
    my_friends: [],
    fb_messages: [],
    currentFd: [],
    successMessage: "",
    errorMessage: "",
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
    updateMessage: (state, { payload }) => {
      state.fb_messages = [...state.fb_messages, payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(add_friend.fulfilled, (state, { payload }) => {
      state.my_friends = payload.MyFriends;
      state.fb_messages = payload.messages;
      state.currentFd = payload.currentFriend;
    });
    builder.addCase(send_message.fulfilled, (state, { payload }) => {
      let tempFriends = state.my_friends;
      let index = tempFriends.findIndex(
        (f) => f.fdId === payload.message.receiverId
      );
      while (index > 0) {
        let temp = tempFriends[index];
        tempFriends[index] = tempFriends[index - 1];
        tempFriends[index - 1] = temp;
        index--;
      }

      state.my_friends = tempFriends;
      state.fb_messages = [...state.fb_messages, payload.message];
      state.successMessage = "Message Sent";
    });
  },
});

export default chatReducer.reducer;
export const { messageClear, updateMessage } = chatReducer.actions;
