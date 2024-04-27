"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type Props = {}

const Checkout = (props: Props) => {
    console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  return (
    <div className="bg-white">
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
    </div>
  )
}

export default Checkout