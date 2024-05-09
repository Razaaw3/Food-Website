"use client";

import { axiosRequest } from "@/lib/config";
import { CldImage, CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewItemModal = (props: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation
    if (!name || !price || !weight || !calories || !desc || !image) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axiosRequest.post('/product',{
        name,
        price,
        weight,
        calories,
        description:desc,
        category:'salad',
        image,
      })
      props.setOpen(false)
    } catch (error) {
      console.log(error)
    }
    
    
  };

  const handleImageUpload = (res: any) => {
    console.log(res);
    // Set the uploaded image URL or public ID to the state
    setImage(res.info.secure_url || res.info.public_id);
  };

  return (
    <div className="w-[100vw] mx-auto h-[100vh] absolute top-0 left-0 bg-[#0f0e0eb9] flex justify-center items-center text-white z-20">
      <div className="p-[50px] rounded-[10px] bg-[#253651] relative flex flex-col">
        <span
          className="absolute top-[10px] right-[10px] cursor-pointer text-red-600 font-bold"
          onClick={() => props.setOpen(false)}
        >
          X
        </span>
        <h1 className="mb-[40px] text-2xl font-bold text-center">
          Add New Item
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2 text-gray-500 font-semibold">
              Name:
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 text-gray-500 font-semibold">
              Price:
              <input
                type="number"
                className="grow"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 text-gray-500 font-semibold">
              Weight:
              <input
                type="number"
                className="grow"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 text-gray-500 font-semibold">
              Calories:
              <input
                type="number"
                className="grow"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 text-gray-500 font-semibold">
              Desc:
              <input
                type="text"
                className="grow"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>

            <CldUploadButton
              uploadPreset="food-website"
              className="bg-red-600 text-white p-2 rounded-md w-[50%] mx-auto"
              onSuccess={handleImageUpload}
            />

            {/* // <CldImage width="600" height="600" src="<Public ID or Cloudinary URL>" alt="<Alt Text>"  >
            //   <input type="file" className="grow text-center" />
            // </CldImage> */}
          </div>
          <div className="flex justify-center items-center mt-8">
            <button className="text-xl bg-textSoft rounded-[5px] px-36 py-2.5">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItemModal;
