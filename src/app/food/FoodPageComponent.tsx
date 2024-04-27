'use client'

import FoodCard from "@/components/FoodCard";
import React, { useState } from "react";
type Props = {
  title? : string
}

const array = [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99]

function FoodPageComponent({title}: Props) {
    const [displayCount, setDisplayCount] = useState(3); // State to track number of cards to display

    const handleShowMore = () => {
      setDisplayCount(prevCount => prevCount + 3); // Increase display count by 3 on each click
    };
  return (
    <div className="bg-white p-20 flex flex-col items-center">
      <h3 className='text-black font-bold text-3xl mb-24 self-start'>{title?title:'Vegetarian Salad'}</h3>
      
      <div className="flex justify-between px-20 flex-wrap gap-y-20 w-full">
        {array.slice(0, displayCount).map(item => <FoodCard key={item} />)}
      </div>
      
      {displayCount < array.length && ( // Render "Show More" button if there are more cards to display
       <button className="btn btn-outline rounded-full btn-md btn-success mt-8 hover:bg-white" onClick={handleShowMore}>
       <span className="hover:text-white h-full flex items-center">Show More</span>
     </button>
      )}
    </div>
  )
}

export default FoodPageComponent