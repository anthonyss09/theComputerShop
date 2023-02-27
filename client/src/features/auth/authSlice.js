import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";

const currentUser = JSON.parse(localStorage.getItem("user")) || null;
const token = JSON.parse(localStorage.getItem("token")) || null;
const client_secret = JSON.parse(localStorage.getItem("client_secret"));

const initialState = {
  user: currentUser,
  token: token,
  client_secret: client_secret,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state, action) {
      state.user = "";
      state.token = "";
    },
    clearClientSecret(state, action) {
      state.client_secret = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.updateUserCart.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.getStripeSecret.matchFulfilled,
      (state, { payload }) => {
        state.client_secret = payload.client_secret;
        window.location.href = "/checkout";
      }
    );
  },
});

export const selectCurrentUser = (state) => state.auth.user;
export const selectClientSecret = (state) => state.auth.client_secret;
export const { logoutUser, clearClientSecret } = authSlice.actions;
export default authSlice.reducer;
