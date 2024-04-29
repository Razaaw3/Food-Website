import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className=" flex items-center gap-2.5 bg-[#374259] p-2.5 rounded-[10px] w-max">
      <MdSearch className="text-white " />
      <input
        id="add-item"
        type="text"
        placeholder="Search for item..."
        className=" bg-transparent border-none outline-none text-white"
      />
    </div>
  );
};

export default Search;
