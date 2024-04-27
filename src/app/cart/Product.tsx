import React from 'react'
import { FaMinus } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'

type Props = {}

function Product({}: Props) {
  return (
    <div className='w-full items-center rounded-2xl bg-white drop-shadow-xl flex relative px-6 py-2'>
        <div className="avatar absolute left-[-20px] drop-shadow-sm">
        <div className="card-sm">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
        <div className='w-[70%] flex flex-col ml-auto gap-y-2'>
        <h4 className="font-extrabold text-sm text-black">Shrimp and Mango Salad</h4>
        <p className="text-xs">280g | 400 kcal | GF</p>

        <div className='flex items-center justify-between'>
        <h2 className="text-3xl text-green-600 font-medium">
        $9.<span className="font-normal text-lg ">40</span>{" "}
      </h2>
      <div className="flex items-center gap-x-2">
              <p className='text-sm'>Quantity : </p>
              <button
                type="button"
                className="bg-lightGreen rounded-full h-8 w-8 drop-shadow-sm flex justify-center items-center border-[#3eba46] border-2"
              >
                <IoIosAdd className="text-green-600 " size={26} />
              </button>
              <p>2</p>
              <button
                type="button"
                className="bg-white rounded-full h-8 w-8 drop-shadow-lg flex justify-center items-center"
              >
                <FaMinus className="text-green-600 " />
              </button>
            </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Product