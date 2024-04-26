import Image from "next/image";

export default function Home() {
  return (
    <div id="container" className="flex gap-24 min-h-screen">
      <div className=" flex flex-1 flex-col gap-10">
        <p className="text-xl text-[#e1e1d9] mt-10">
          Welcome to CleanPlate delivery
        </p>
        <h1 className="text-5xl font-bold text-white">
          The Faster Healthy Food Delivery In{" "}
          <span className="text-textSoft">Your City</span>
        </h1>
        <p className="text-md text-justify max-w-[450px] text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          nihil blanditiis placeat illum beatae distinctio, illo rem libero
          explicabo porro accusantium tenetur animi suscipit nulla non
          necessitatibus doloribus.
        </p>
        <div className="flex items-center gap-5">
          <button className="p-3 min-w-[120px] cursor-pointer border-none rounded-2xl bg-gradient-to-r from-textSoft to-text text-white flex justify-center items-center animate-bounce  ">
            Order Now
          </button>
        </div>
      </div>
      <div className="flex-1 relative ">
        <Image src="/saladd.png" alt="" fill />
      </div>
    </div>
  );
}
