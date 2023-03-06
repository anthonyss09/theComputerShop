import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { selectClientSecret } from "../features/auth/authSlice";
import OrderStatus from "../components/OrderStatus";

const stripePromise = loadStripe(
  " pk_test_51LuIXnA3543f5hOkyfim5UCm1qBcR4YJfZGtOGtIAJrXdmn8tqHSK5HyidKhEPVmrX0C7izr1n2ouwBUq7k582fq00U1sPWWux"
);

export default function CheckoutPage() {
  const CLIENT_SECRET = useSelector(selectClientSecret);
  const options = {
    clientSecret: CLIENT_SECRET,
  };

  let content;
  if (!CLIENT_SECRET) {
    content = <div>This page has expired</div>;
  } else {
    content = (
      <Elements stripe={stripePromise} options={options}>
        <OrderStatus />
      </Elements>
    );
  }

  return <section className="page-height center">{content}</section>;
}
