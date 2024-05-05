"use client";

import NewItemModal from "@/components/NewItemModal";
import React, { useState } from "react";
import DataOfGrid from "@/components/GridData";

const AddNewItem = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#2b3e5d] p-5 rounded-[10px] mt-2.5 mx-20 mb-4 ">
      <div className="flex items-center justify-end ">
        {/* <Search /> */}
        <button
          className="p-3 bg-green-600 text-white border-none rounded-md cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Add New
        </button>
      </div>

      {open && <NewItemModal setOpen={setOpen} />}
      <DataOfGrid />
    </div>
  );
};

export default AddNewItem;
