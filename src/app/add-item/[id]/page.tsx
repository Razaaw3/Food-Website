import Image from "next/image";
import React from "react";

const SingleItemPage = () => {
  return (
    <div className="flex gap-[50px] mt-5 w-full text-white mx-20">
      <div className=" w-[22%]  bg-[#2b3e5d] p-5 rounded-[10px] font-bold text-white">
        <div className="w-[300px] h-[300px] relative rounded-[10px] overflow-hidden mb-5">
          <Image src="/avocado-salad.webp" alt="" fill />
        </div>
        <h1 className="flex justify-center items-center p-4">Avocado Salad</h1>
      </div>
      <div className="w-[65%] bg-[#2b3e5d] p-5 rounded-[10px] ">
        <form action=" " className="flex flex-col gap-1">
          <label className="ml-3 text-[12px] ">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Avocado Salad"
            className="p-5 rounded-[5px] bg-bgSoft text-white mx-[10px] my-0 border-2 border-[#2e374a]"
          />
          <label className="ml-3 text-[12px] ">Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Creamy avocado Salad..."
            className="p-5 rounded-[5px] bg-bgSoft text-white mx-[10px] my-0 border-2 border-[#2e374a]"
          />
          <label className="ml-3 text-[12px] ">Calories</label>
          <input
            type="text"
            name="kcal"
            placeholder="150 Kcal"
            className="p-5 rounded-[5px] bg-bgSoft text-white mx-[10px] my-0 border-2 border-[#2e374a]"
          />
          <label className="ml-3 text-[12px]">Price</label>
          <input
            type="number"
            name="price"
            placeholder="$5.90"
            className="p-5 rounded-[5px] bg-bgSoft text-white mx-[10px] my-0 border-2 border-[#2e374a] "
          />
          <button className="w-full p-5 bg-teal-500 text-white border-none rounded-[5px] cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleItemPage;