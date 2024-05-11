import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="p-2 mb-3 animate-spin bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-24 md:h-24 h-12 w-12 aspect-square rounded-full">
      <div className="rounded-full h-full w-full bg-transparent dark:bg-white background-blur-md"></div>
    </div>
  );
};

export default Loader;
