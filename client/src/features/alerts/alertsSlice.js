import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { useDispatch } from "react-redux";

export const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    showAlert: false,
    alertType: "",
    alertMessage: "",
  },
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertType = "";
      state.alertMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.showAlert = true;
        state.alertType = "success";
        state.alertMessage = "Succesfully logged in user, redirecting...";
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchRejected,
      (state, { payload }) => {
        state.showAlert = true;
        state.alertType = "danger";
        state.alertMessage = payload.data.error;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.showAlert = true;
        state.alertType = "success";
        state.alertMessage = "Succesfully registered user, redirecting...";
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchRejected,
      (state, { payload }) => {
        state.showAlert = true;
        state.alertType = "danger";
        state.alertMessage = payload.data.error;
      }
    );
  },
});

export const selectAlertsInfo = (state) => state.alerts;
export const { clearAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
