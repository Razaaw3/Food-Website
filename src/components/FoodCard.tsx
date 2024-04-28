import { Products } from "@/Models/Product";
import { foodsType } from "@/types";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

type Props = {
  size?: string;
  item : foodsType
};

function FoodCard({ size,item }: Props) {
  return (
    <div className="p-8 bg-[#f5f4f4] w-60 flex flex-col gap-2 drop-shadow-2xl rounded-2xl relative">
      <div className="avatar absolute right-[-40px] top-[-40px]">
        <div className={size==='sm'?"card-sm":"card-lg"}>
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <h2 className="text-3xl font-medium">
        $9.<span className="font-normal text-lg ">40</span>{" "}
      </h2>

      <h4 className="font-medium text-lg w-32">{item.name}</h4>
      {size !== "sm" && <p className="text-xs">{item.weight}g | {item.calories} kcal | GF</p>}

      <p className="text-xs">
        {item.description}
      </p>
      {size === "sm" ? (
        <button className=" text-white px-3 py-2 bg-green-600 rounded-full text-sm">
          Order Now
        </button>
      ) : (
        <div className="flex justify-between items-center">
          {/* <button
            type="button"
            className="bg-white rounded-full h-8 w-8 drop-shadow-xl flex justify-center items-center"
          >
            <FaRegHeart className="text-green-600 " />
          </button> */}
          <button className=" w-full text-white px-3 py-2 drop-shadow-lg bg-green-600 rounded-full text-sm">
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}

export default FoodCard;
