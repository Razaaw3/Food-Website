"use client";
import { useStore } from "@/store";
import Link from "next/link";
import React, { useEffect } from "react";

const ThankYouPage: React.FC = () => {
  const { dispatch } = useStore();
  useEffect(() => {
    localStorage.setItem("cartItems", "");
    dispatch({ type: "count", payload: 0 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Thank You for Shopping!</h1>
      <p className="text-lg">Your order has been successfully placed.</p>
      <p className="text-lg">We appreciate your business.</p>
      <Link href={"/order"} className=" text-white px-4 py-2 mt-8 rounded-lg">
        check your orders
      </Link>
    </div>
  );
};

export default ThankYouPage;
