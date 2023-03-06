import Wrapper from "../../assets/wrappers/CartView";
import { useSelector } from "react-redux";
import {
  selectAllCartItems,
  selectCartSubTotal,
  selectCartTax,
} from "./cartSlice";
import CartItemPreview from "./CartItemPreview";
import { useGetStripeSecretMutation } from "../products/extendedApiSlice";

export default function CartView() {
  const cartTax = useSelector(selectCartTax);
  const cartItems = useSelector(selectAllCartItems);
  const cartSubtotal = useSelector(selectCartSubTotal);
  const cartTotal = (Number(cartTax) + Number(cartSubtotal)).toFixed(2);

  const [getStripeSecret] = useGetStripeSecretMutation();

  const handleCheckout = async () => {
    const response = await getStripeSecret({ cartTotal });

    localStorage.setItem(
      "client_secret",
      JSON.stringify(response.data.client_secret)
    );
    // localStorage.setItem("port", JSON.stringify(response.data.port));
  };

  const previewItems = cartItems.map((item, index) => {
    return (
      <CartItemPreview
        key={index}
        model={item.model}
        manufactuer={item.manufactuer}
        price={item.price}
        count={item.count}
        image={item.image}
        id={item._id}
      />
    );
  });

  let content;
  if (cartItems.length) {
    content = (
      <section className="page-height cart-view">
        <div className="cart-items">{previewItems}</div>
        <div className="cart-summary">
          <p className="sub-total">Subtotal: {cartSubtotal}</p>
          <p className="tax">Tax: {cartTax}</p>
          <p className="total">Total: {cartTotal}</p>
        </div>
        <button className="button" onClick={handleCheckout}>
          Check out
        </button>
      </section>
    );
  } else
    content = (
      <section className="page-height center">No items in cart.</section>
    );
  return <Wrapper>{content}</Wrapper>;
}
