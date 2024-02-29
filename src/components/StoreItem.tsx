"use client";

import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { ShoppingCartProvider, useShoppingCart } from "@/context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart() 
  
  const quantity =  getItemQuantity(id)
  return (
    <>
   
      <div
        className="bg-gray-200 p-4 rounded-lg text-center mt-8
          hover:bg-white hover:shadow-2xl
           hover:shadow-black/50 transition-all "
      >
        <div className="text-center">
          <Image
            className="rounded-lg"
            objectFit="cover"
            src={imgUrl}
            width={500}
            height={400}
            alt={""}
          />
        </div>
        <h4 className="font-semibold my-3 text-xl ">{name}</h4>
        <p className="text-gray-900 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisi
        </p>

        <div>
          {quantity === 0 ? (
            <>
              <button onClick={() => increaseCartQuantity(id)} className="bg-orange-500 text-white rounded-full px-4 py-2 mt-4">
                {formatCurrency(price)}
              </button>
            </>
          ) : (
            <>
              <div className="flex gap-8 mt-4">
                <button onClick={() => increaseCartQuantity(id)} className="bg-green-600 text-white">+</button>
                <div className="flex items-center justify-center">
                  {quantity}
                </div>
                <button onClick={() => decreaseCartQuantity(id)} className="bg-red-700 text-white">-</button>
              </div>
              {/* <button>remove</button> */}
            </>
          )}
           
        </div>
      </div>
      
    </>
  );
}
