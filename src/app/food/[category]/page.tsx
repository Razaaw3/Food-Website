import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import FoodPageComponent from "../FoodPageComponent";
import { FaMinus } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import Dropdown from "@/components/Dropdown";

const CategoryPages = () => {
  return (
    <div className="bg-white">
      <div className="bg-white relative py-10">
        <div className="avatar flex items-center justify-center left-8 absolute z-10 drop-shadow-md w-[50%] ">
          <div className="w-[50%] rounded-full ring ring-white  ring-offset-4">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex items-center justify-end bg-white py-10 w-[80%] mx-auto  drop-shadow-xl rounded-lg">
          <div className="flex flex-col gap-y-5 mr-24">
            <p className="text-xs">280g | 400 kcal | GF</p>
            <h2 className="text-3xl font-medium">
              $9.<span className="font-normal text-lg ">40</span>{" "}
            </h2>

            <div className="flex items-center gap-x-2">
              <p>Quantity : </p>
              <button
                type="button"
                className="bg-lightGreen rounded-full h-8 w-8 drop-shadow-sm flex justify-center items-center border-[#3eba46] border-2"
              >
                <IoIosAdd className="text-green-600 " size={26} />
              </button>
              <p>2</p>
              <button
                type="button"
                className="bg-white rounded-full h-8 w-8 drop-shadow-lg flex justify-center items-center"
              >
                <FaMinus className="text-green-600 " />
              </button>
            </div>
            <div className="flex items-center border-0">
              <p>Add Additional Products:</p>
              <Dropdown />
            </div>
            <div className="flex justify-between items-center w-[40%]">
              <button className=" text-white px-3 py-2 drop-shadow-lg bg-green-600 rounded-full text-sm">
                Add to cart
              </button>
              <button
                type="button"
                className="bg-white rounded-full h-8 w-8 drop-shadow-xl flex justify-center items-center"
              >
                <FaRegHeart className="text-green-600 " />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white drop-shadow-xl w-[80%] mx-auto px-14 py-8 rounded-lg">
        <h4 className="text-lg font-bold text-black mb-3">Description</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptates ut architecto veritatis amet recusandae, aspernatur
          suscipit sit distinctio expedita nam deleniti harum. Sunt
          exercitationem necessitatibus quidem accusamus id optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptates ut architecto veritatis amet recusandae, aspernatur
          suscipit sit distinctio expedita nam deleniti harum. Sunt
          exercitationem necessitatibus quidem accusamus id optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptates ut architecto veritatis amet recusandae, aspernatur
          suscipit sit distinctio expedita nam deleniti harum. Sunt
          exercitationem necessitatibus quidem accusamus id optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptates ut architecto veritatis amet recusandae, aspernatur
          suscipit sit distinctio expedita nam deleniti harum. Sunt
          exercitationem necessitatibus quidem accusamus id optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptates ut architecto veritatis amet recusandae, aspernatur
          suscipit sit distinctio expedita nam deleniti harum. Sunt
          exercitationem necessitatibus quidem accusamus id optio?
        </p>
      </div>
      <FoodPageComponent title="YOU MAY LIKE" />
    </div>
  );
};

export default CategoryPages;
