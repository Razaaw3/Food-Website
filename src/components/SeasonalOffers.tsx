import React from "react";
import FoodCard from "./FoodCard";
import { foodsType } from "@/types";

type Props = {
  foods : foodsType[]
};

export default function SeasonalOffers({foods}: Props) {
  return (
    <div>
      <div className="flex justify-between px-10 mb-20">
        <h3 className='text-black font-bold text-xl'>SEASONAL OFFERS</h3>
        <p className='text-black font-bold text-xl'>SEE MORE </p>
      </div>
      <div className="flex justify-between px-20">

        {
          foods.map(item=><FoodCard key={item._id} item={item}/>)
        }
      

        </div>
    </div>
  );
}
