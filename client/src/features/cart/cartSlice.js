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

// const localCart = JSON.parse(localStorage.getItem("localCart")) || null;
// let normCart;
// let ids;
// if (localCart) {
//   normCart = normalizeArray(localCart);
//   ids = getIds(localCart);
// }

const initialState = cartAdapter.getInitialState({
  ids: ids,
  entities: normCart,
  cartCount: cartCount,
  cartSubTotal: cartSubTotal.toFixed(2),
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
      state.cartSubTotal += action.payload.price;
      state.cartTax = (state.cartSubTotal * 0.865).toFixed(2);
      localStorage.setItem(
        "localCart",
        JSON.stringify(Object.values(state.entities))
      );
    },
    removeItemFromCart(state, action) {
      const productId = action.payload._id;
      if (state.ids.includes(productId)) {
        state.entities[productId].count--;
      } else {
        cartAdapter.removeOne(state, action.payload);
      }
      state.cartCount--;
      state.cartSubTotal -= action.payload.price;
      localStorage.setItem(
        "localCart",
        JSON.stringify(Object.values(state.entities))
      );
    },
    clearCart(state, action) {
      state.ids = [];
      state.entities = {};
      state.cartSubTotal = 0;
      state.cartTax = 0;
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

export const { addItemToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
