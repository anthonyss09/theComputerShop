import { normalizeArray, getIds } from "./helpers";

const localCart = JSON.parse(localStorage.getItem("localCart")) || null;
let normCart = {};
let ids = [];
let cartCount = 0;
let cartSubTotal = 0;
console.log(localCart);
if (localCart) {
  normCart = normalizeArray(localCart);
  ids = getIds(localCart);
  cartCount =
    localCart.length > 0
      ? localCart.reduce((a, b) => {
          return a.count + b.count;
        })
      : 0;
  cartSubTotal = localCart.reduce((a, b) => {
    return a + b.count * b.price;
  }, 0);
}

export { ids, normCart, cartCount, cartSubTotal };
