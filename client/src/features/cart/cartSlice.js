import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { ids, normCart, cartCount, cartSubTotal } from "../../utils/cartInfo";
import { apiSlice } from "../api/apiSlice";
import {
  getIds,
  normalizeArray,
  getCartTotal,
  calcTax,
} from "../../utils/helpers";

const cartAdapter = createEntityAdapter({
  selectId: (product) => product._id,
});

const initialState = cartAdapter.getInitialState({
  ids: ids,
  entities: normCart,
  cartCount: cartCount,
  cartSubTotal: cartSubTotal,
  cartTax: (cartSubTotal * 0.865).toFixed(2),
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const productId = action.payload._id;
      if (state.ids.includes(productId)) {
        state.entities[productId].count++;
      } else {
        cartAdapter.addOne(state, action.payload);
      }
      state.cartCount++;
      state.cartSubTotal = (
        Number(state.cartSubTotal) + action.payload.price
      ).toFixed(2);
      state.cartTax = (state.cartSubTotal * 0.865).toFixed(2);
    },
    removeItemFromCart(state, action) {
      const productId = action.payload._id;
      if (state.ids.includes(productId)) {
        state.entities[productId].count--;
        if (state.entities[productId].count === 0) {
          delete state.entities[productId];
          const index = state.ids.indexOf(productId);
          state.ids.splice(index, 1);
        }
      }
      state.cartCount--;
      state.cartSubTotal = (
        Number(state.cartSubTotal) - action.payload.price
      ).toFixed(2);
      state.cartTax = (state.cartSubTotal * 0.865).toFixed(2);
    },
    clearCart(state, action) {
      state.ids = [];
      state.entities = {};
      state.cartSubTotal = 0;
      state.cartTax = 0;
      state.cartCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        const userCart = payload.user.userCart;
        const ids = getIds(userCart);
        const normCart = normalizeArray(userCart);
        state.ids = ids;
        state.entities = normCart;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        const userCart = payload.user.userCart;
        const ids = getIds(userCart);
        const normCart = normalizeArray(userCart);
        state.ids = ids;
        state.entities = normCart;
        state.cartSubTotal = getCartTotal(userCart).toFixed(2);
        state.cartTax = calcTax(getCartTotal(userCart));
        state.cartCount = cartCount;
      }
    );
  },
});

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartIds,
} = cartAdapter.getSelectors((state) => state.cart);

export const selectCartCount = (state) => state.cart.cartCount;
export const selectCartSubTotal = (state) => state.cart.cartSubTotal;
export const selectCartTax = (state) => state.cart.cartTax;

export const { addItemToCart, clearCart, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
