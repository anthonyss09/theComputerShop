import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChekcoutForm from "../components/CheckoutForm";
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
  } else if (window.location.href === "http://localhost:3000/checkout") {
    content = (
      <Elements stripe={stripePromise} options={options}>
        <ChekcoutForm />
      </Elements>
    );
  } else {
    content = (
      <Elements stripe={stripePromise} options={options}>
        <OrderStatus />
      </Elements>
    );
  }
  return (
    <section className="page-height center">
      {/* <Elements stripe={stripePromise} options={options}>
        {content}
      </Elements> */}
      {content}
    </section>
  );
}
