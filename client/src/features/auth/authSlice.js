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
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("localCart");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        localStorage.setItem("user", JSON.stringify(payload.user));
        localStorage.setItem("token", JSON.stringify(payload.token));
        localStorage.setItem("localCart".JSON.stringigy(payload.user.userCart));
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        localStorage.setItem("user", JSON.stringify(payload.user));
        localStorage.setItem("token", JSON.stringify(payload.token));
        localStorage.setItem(
          "localCart",
          JSON.stringify(payload.user.userCart)
        );
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.updateUserCart.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        localStorage.setItem("user", JSON.stringify(payload));
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.getStripeSecret.matchFulfilled,
      (state, { payload }) => {
        localStorage.setItem(
          "client_secret",
          JSON.stringify(payload.client_secret)
        );
        state.client_secret = payload.client_secret;
        window.location.href = "/checkout";
      }
    );
    // builder.addMatcher(
    //   apiSlice.endpoints.fetchUserData.matchFulfilled,
    //   (state, { payload }) => {
    //     console.log(payload);
    //     state.user = payload;
    //     localStorage.setItem("user", JSON.stringify(payload));
    //     // localStorage.setItem("token", JSON.stringify(payload.token));
    //   }
    // );
  },
});

export const selectCurrentUser = (state) => state.auth.user;
export const selectClientSecret = (state) => state.auth.client_secret;
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
