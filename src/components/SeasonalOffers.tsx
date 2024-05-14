import React from "react";
import FoodCard from "./FoodCard";
import { foodsType } from "@/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  foods: foodsType[];
};

export default function SeasonalOffers({ foods }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time in milliseconds between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-10 mb-20">
      <div className="flex justify-between mb-4">
        <h3 className="text-black font-bold text-xl">SEASONAL OFFERS</h3>
        <p className="text-black font-bold text-xl">SEE MORE</p>
      </div>
      <div className="w-full">
        <Slider {...settings} className="mx-auto">
          {foods.map((item) => (
            <div key={item._id} className=" h-full mt-20 mb-10 ml-10">
              <FoodCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
