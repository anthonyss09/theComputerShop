import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        //set local storage items
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        //set local storage items
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export const selectCurrentUser = (state) => state.auth.user;
export default authSlice.reducer;
