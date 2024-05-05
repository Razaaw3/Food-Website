"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useStore } from "@/store";
import axios from "axios";
import { useEffect, useState } from "react";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type Props = {}

const Checkout = (props: Props) => {
  const {state} = useStore();
  const [clientSecret, setClientSecret] = useState('')
  
  const id_quantity = state.cartItems.map(item => ({ product: item._id, quantity: item.quantity }));

  useEffect(() => {
    (async()=>{
      try {
        const cs = await axios.post("/api", {
          data: { amount: Math.floor(state.totalPrice) },
        });
        setClientSecret(cs.data)
        console.log(cs)
      } catch (error) {
        console.log(error)
      }
    })();
  
    
  }, [])
  
  
  
    console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,state) 
  return (
    <div className="bg-white flex flex-1 justify-center py-12">
      {clientSecret && stripePromise && (
    <Elements stripe={stripePromise} options={{clientSecret : clientSecret}}>
      <PaymentForm data={id_quantity}/>
    </Elements>
      )}
    </div>
  )
}

export default Checkout
