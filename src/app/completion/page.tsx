'use client'
import Link from 'next/link';
import React from 'react';

const ThankYouPage: React.FC = () => {
    localStorage.setItem("cartItems", '');
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Thank You for Shopping!</h1>
      <p className="text-lg">Your order has been successfully placed.</p>
      <p className="text-lg">We appreciate your business.</p>
      <Link
        href={'/'}
        className=" text-white px-4 py-2 mt-8 rounded-lg"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ThankYouPage;
