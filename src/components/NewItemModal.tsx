"use client";

import React from "react";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewItemModal = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-[100vw] mx-auto h-[100vh] absolute top-0 left-0 bg-[#0f0e0eb9] flex justify-center items-center text-white">
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
              <input type="text" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2 text-gray-500 font-semibold">
              Desc:
              <input type="text" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2 text-gray-500 font-semibold">
              Calories:
              <input type="text" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2 text-gray-500 font-semibold">
              Price:
              <input type="number" className="grow" />
            </label>
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
