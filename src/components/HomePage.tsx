'use client'
import ChooseUs from "@/components/ChooseUs";
import FoodPackages from "@/components/FoodPackages";
import SeasonalOffers from "@/components/SeasonalOffers";
import { axiosRequest } from "@/lib/config";
import { foodsType } from "@/types";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
    const [foods, setFoods] = useState<foodsType[]>([])

    useEffect(() => {
      (async function (){
        try {
          const {data} = await axiosRequest.get('/product') 
          setFoods(data.message)
          // console.log()
        } catch (error) {
          console.log(error)
        }
      })(); 
    

    }, [])
  return (
    <div>
    <div id="container" className="flex  min-h-screen">
      <div className=" flex flex-col gap-10">
        <p className="text-xl text-[#e1e1d9] mt-10">
          Welcome to CleanPlate delivery
        </p>
        <h1 className="text-5xl font-bold text-white">
          The Faster Healthy Food Delivery In{" "}
          <span className="text-textSoft">Your City</span>
        </h1>
        <p className="text-md text-justify max-w-[450px] text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          nihil blanditiis placeat illum beatae distinctio, illo rem libero
          explicabo porro accusantium tenetur animi suscipit nulla non
          necessitatibus doloribus.
        </p>
        <div className="flex items-center gap-5">
          <button className="p-3 min-w-[120px] cursor-pointer border-none rounded-2xl bg-gradient-to-r from-textSoft to-text text-white flex justify-center items-center animate-bounce  ">
            Order Now
          </button>
        </div>
      </div>
      <div className="w-[800px] flex">
        <img src="/saladd.png" alt=""  className="my-auto" />
      </div>
    
    </div>
    <div className="bg-[#f4f4f4] flex flex-col gap-20 pt-24">
    <SeasonalOffers foods={foods}/>
    <ChooseUs/>
    <FoodPackages foods={foods}/>
    </div>
    </div>
  );
}
