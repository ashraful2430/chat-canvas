import Container from "../../Shared/Container/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEAWAY_KEY);
const Membership = () => {
  return (
    <>
      <Container>
        <div>
          <h3 className="mt-10 font-medium text-3xl mb-16 text-center">
            Become premium and enjoy more facility
          </h3>
        </div>
        <div>
          <p className="text-xl font-medium">
            Spend <span className="text-blue-400">200$ </span>to become premium
            member and enjoy premium facility
          </p>
        </div>
        <div className="min-h-[60vh] mt-10">
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>
        </div>
      </Container>
    </>
  );
};

export default Membership;
