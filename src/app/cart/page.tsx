"use client"

import { ShoppingCart } from "@/context/shop/ShoppingCart";

export default function CartIems() {
  return (
    <section className="flex  max-w-full h-full  justify-around  mx-auto mt-20">
     <ShoppingCart isOpen={false}/>
     
    </section>
  );
}
