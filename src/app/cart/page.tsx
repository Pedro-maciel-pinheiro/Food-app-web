"use client"

import { ShoppingCart } from "@/context/shop/ShoppingCart";

export default function CartIems() {
  return (
    <div className="flex items-center justify-center  mx-auto mt-20">
     <ShoppingCart isOpen={false}/>
     
    </div>
  );
}
