"use client";

import NewItemModal from "@/components/NewItemModal";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DataOfGrid from "@/components/GridData";

const AddNewItem = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#2b3e5d] p-5 rounded-[10px] mt-2.5 mx-20 mb-4 ">
      <div className="flex items-center justify-end ">
        {/* <Search /> */}
        <button
          className="p-3 bg-[#5d57c9] text-white border-none rounded-md cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Add New
        </button>
      </div>
      <div className="border-b-2 border-b-white w-full mt-4"></div>
      {open && <NewItemModal setOpen={setOpen} />}
      <DataOfGrid />
    </div>
  );
};

export default AddNewItem;
