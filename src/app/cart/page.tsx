"use client"

import { ShoppingCart } from "@/context/shop/ShoppingCart";





export default function CartIems() {
  return (
    <div className="flex max-w-full h-full  justify-around  mx-auto">
     <ShoppingCart isOpen={false}/>
    </div>
  );
}
