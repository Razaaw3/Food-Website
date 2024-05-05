'use client'
import { useStore } from '@/store';
import { foodsType } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Product from './Product';

type Props = {}

const CartComponent = (props: Props) => {
    const [cartItems, setCartItems] = useState<foodsType[]>([]);
    const {state, dispatch} = useStore();
    const router = useRouter();

    useEffect(() => {
        const savedCartItems = localStorage.getItem("cartItems");

        if (savedCartItems) {
          setCartItems(JSON.parse(savedCartItems));
        }
      }, []);

    const orderWeight = cartItems.reduce((acc, curr) => acc + (curr.weight * curr.quantity), 0);

    const totalPrice = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    const updateQuantity = (itemId: string, newQuantity: number) => {
      const updatedItems = cartItems.map(item => {
        if (item._id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      
      setCartItems(updatedItems);
    };

    const Proceed = () =>{
      dispatch({type:'cart',payload:{cartItems,totalPrice:totalPrice+10,totalItems : cartItems.length, totalWeight:orderWeight}})
      router.push('/cart/checkout')
    } 

    return (
      
        <div className="bg-white px-20 py-10">
            <h3 className="text-black font-bold text-xl">MY CART</h3>
            <div className="flex justify-between mt-10">
                <div className="w-[40%] flex flex-col gap-y-8">
                    {cartItems.map((item) => (
                        <Product key={item._id} item={item} onUpdateQuantity={updateQuantity} />
                    ))}
                </div>
                <div className="w-[50%]">
                    <div className="rounded-xl bg-[#253651] flex flex-col p-5 items-start gap-y-2">
                        <h3 className="text-white font-semibold text-md">
                            Details of your Order
                        </h3>
                        <p className="text-white text-xs">
                            Order Weight : <span className="font-bold">{orderWeight}g</span>
                        </p>
                        <p className="text-white text-xs">
                            Good items ({cartItems.length}) : <span className="font-bold">${totalPrice.toFixed(2)}</span>
                        </p>
                        <p className="text-white text-xs">
                            Delivery : <span className="font-bold">$10</span>
                        </p>
                        <div className="w-full h-[1px] bg-gray-500"></div>
                        <p className="text-white text-xs">
                            Total Price : <span className="font-bold text-green-600">${(totalPrice + 10).toFixed(2)}</span>
                        </p>
                        <button onClick={Proceed} className=" text-white px-3 py-2 drop-shadow-lg bg-green-600 rounded-full text-sm mx-auto">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
  
    )
}

export default CartComponent