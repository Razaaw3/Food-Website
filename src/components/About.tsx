import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex gap-2 text-white mx-20 mb-15 mt-4">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="mt-8 text-[54px] text-3xl leading-[65px]">
          <b>
            Welcome to <span className="text-green-500">CleanPlate </span>
            your one-stop shop for delicious and healthy salad deliveries!
          </b>
        </h1>
        <p className="text-[20px] text-2xl text-justify text-gray-300 mt-8">
          We believe that healthy eating shouldn't be complicated or
          time-consuming. We're committed to making it easy for everyone to
          enjoy fresh, vibrant salads made with high-quality ingredients. Our
          mission is to:
        </p>
        <ol className="list-disc ml-4 text-lg text-justify leading-10 text-gray-300">
          <li>Offer a variety of delicious and satisfying salad options</li>
          <li>Source fresh, seasonal ingredients</li>
          <li>Provide convenient delivery options </li>
          <li>Promote a healthy lifestyle</li>
        </ol>
        <div className="flex items-center justify-between text-2xl mt-20 mb-20">
          <div className="flex flex-col gap-[10px] ">
            <h1 className="text-green-400 text-5xl">
              <b>10 K+</b>
            </h1>
            <p className="text-gray-300">Satisfied Customers</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-green-400 text-5xl">
              <b>1K+</b>
            </h1>
            <p className="text-gray-300">Orders delivered</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-green-400 text-5xl">
              <b>4Y+</b>
            </h1>
            <p className="text-gray-300">In industry</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/giphy.gif" alt="" fill className=" object-contain" />
      </div>
    </div>
  );
};

export default About;
