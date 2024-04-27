import React from "react";
import FoodCard from "./FoodCard";

type Props = {};

export default function SeasonalOffers({}: Props) {
  return (
    <div>
      <div className="flex justify-between px-10 mb-20">
        <h3 className='text-black font-bold text-xl'>SEASONAL OFFERS</h3>
        <p className='text-black font-bold text-xl'>SEE MORE </p>
      </div>
      <div className="flex justify-between px-20">
      <FoodCard />
      <FoodCard />
      <FoodCard />
        </div>
    </div>
  );
}
