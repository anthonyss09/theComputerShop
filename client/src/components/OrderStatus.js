import { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useTransferCartToOrderedMutation } from "../features/api/apiSlice";

export default function OrderStatus() {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [transferCartToOrdered] = useTransferCartToOrderedMutation();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      // Inspect the PaymentIntent `status` to indicate the status of the payment
      // to your customer.
      //
      // Some payment methods will [immediately succeed or fail][0] upon
      // confirmation, while others will first enter a `processing` state.
      //
      // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification

      localStorage.removeItem("client_secret");

      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Success! Payment received.");
          localStorage.removeItem("localCart");
          dispatch(clearCart());
          if (user) {
            transferCartToOrdered({
              userId: user._id,
              cart: user.userCart,
            }).then(() => {
              const userPlace = JSON.parse(localStorage.getItem("user"));
              userPlace.userCart = [];
              userPlace.orderedProducts = userPlace.orderedProducts.concat(
                user.userCart
              );
              localStorage.setItem("user", JSON.stringify(userPlace));
            });
          }
          break;

        case "processing":
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;

        case "requires_payment_method":
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          setMessage("Payment failed. Please try another payment method.");
          break;

        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, dispatch]);

  return <section className="page-height center">{message}</section>;
}
