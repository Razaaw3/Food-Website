"use client";

import NewItemModal from "@/components/NewItemModal";
import React, { useEffect, useState } from "react";
import DataOfGrid from "@/components/GridData";
import { axiosRequest } from "@/lib/config";

const AddNewItem = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("Use effect is called");
    (async () => {
      const { data } = await axiosRequest.get("/product");
      setProducts(data.message);
    })();
  }, [open]);
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

      <DataOfGrid data={products} />
      {open && <NewItemModal setOpen={setOpen} />}
    </div>
  );
};

export default AddNewItem;
