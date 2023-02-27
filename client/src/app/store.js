import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import cartSliceReducer from "../features/cart/cartSlice";
import alertsSliceReducer from "../features/alerts/alertsSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    cart: cartSliceReducer,
    alerts: alertsSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
