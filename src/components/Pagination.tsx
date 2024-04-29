import React from "react";

const Pagination = () => {
  return (
    <div className="p-2.5 flex justify-between">
      <button
        className="p-2.5 rounded-[5px] cursor-pointer text-white bg-gray-300 disabled:cursor-not-allowed"
        disabled
      >
        Previous
      </button>
      <button className="px-3 py-2 rounded-[5px] cursor-pointer text-lg text-white bg-green-600">
        Next
      </button>
    </div>
  );
};

export default Pagination;
