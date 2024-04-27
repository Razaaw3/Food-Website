import React from "react";
import Product from "./Product";

const array = [1, 2, 3, 4, 5, 6];
const CartPage = () => {
  return (
    <div className="bg-white px-20 py-10">
      <h3 className="text-black font-bold text-xl">MY CART</h3>
      <div className="flex justify-between mt-10">
        <div className="w-[40%] flex flex-col gap-y-8">
          {array.map((item) => (
            <Product />
          ))}
        </div>
        <div className="w-[50%]">
          <div className="rounded-xl bg-[#253651] flex flex-col p-5 items-start gap-y-2">
            <h3 className="text-white font-semibold text-md">
              Details of your Order
            </h3>
            <p className="text-white text-xs">
              Order Weight : <span className="font-bold">3.5kg</span>
            </p>
            <p className="text-white text-xs">
              Goods (iItem 4) : <span className="font-bold">$500</span>
            </p>
            <p className="text-white text-xs">
              Delivery : <span className="font-bold">$500</span>
            </p>
            <div className="w-full h-[1px] bg-gray-500"></div>
            <p className="text-white text-xs">
              Order Weight :{" "}
              <span className="font-bold text-green-600">$1000</span>
            </p>
            <button className=" text-white px-3 py-2 drop-shadow-lg bg-green-600 rounded-full text-sm mx-auto">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
