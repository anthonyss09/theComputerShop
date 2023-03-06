import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectPort } from "../features/auth/authSlice";

export default function ChekcoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  // const port = useSelector(selectPort);

  const returnUrl = "https://thecomputershop.herokuapp.com/order/order-status";

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      console.log(error.message);
    } else {
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" className="button stripe-button">
        Submit
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
