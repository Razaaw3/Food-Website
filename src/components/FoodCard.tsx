import { Products } from "@/Models/Product";
import { foodsType } from "@/types";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

type Props = {
  size?: string;
  item : foodsType
};

function FoodCard({ size,item }: Props) {

  const handleAddToCart = () => {
    const savedCartItems = localStorage.getItem("cartItems");
    const existingCartItems: foodsType[] = savedCartItems ? JSON.parse(savedCartItems) : [];
  
    const isItemInCart = existingCartItems.some(cartItem => cartItem._id === item._id);
  
    if (isItemInCart) {
      alert(`${item.name} is already in the cart!`);
      return;
    }
    item.quantity = 1;
    const updatedCartItems = [...existingCartItems, item];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    alert(`${item.name} has been added to the cart!`);
  };
  

  
  return (
    <div className="p-8 bg-[#f5f4f4] w-60 flex flex-col gap-2 drop-shadow-2xl rounded-2xl relative">
      <div className="avatar absolute right-[-40px] top-[-40px]">
        <div className={size==='sm'?"card-sm":"card-lg"}>
          <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png" />
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
          <button onClick={handleAddToCart} className=" w-full text-white px-3 py-2 drop-shadow-lg bg-green-600 rounded-full text-sm">
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}

export default FoodCard;
