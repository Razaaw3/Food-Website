"use client";

import { axiosRequest } from "@/lib/config";
import { useStore } from "@/store";
import { foodsType } from "@/types";
import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

type props = {
  data: { product: string; quantity: number; }[];
}

export default function PaymentForm({data}:props ) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<null | string | undefined>(null);
  const {state} = useStore()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !elements) return null;
      setIsLoading(true);

      // const { data } = await axios.post("/api", {
      //   data: { amount: 89 },
      // });
      // const clientSecret = data;
      await axiosRequest.post('/order',{
        userId : '6631f7b2497e53f8c56f35e1',
        totalPrice : state.totalPrice,
        products : data
      })

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${window.location.origin}/completion`,
        },
      });
  
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error?.message);
        
      } else {
        setMessage("An unexpected error occured.");
      }

      
      
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false)
    }

  };

  return (
    <form id="payment-form" onSubmit={onSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} className="bg-slate-700 rounded-full w-full text-white py-2 mt-4" type="submit">Submit</button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}