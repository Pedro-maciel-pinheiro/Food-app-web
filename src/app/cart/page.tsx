"use client";

import { ShoppingCart } from "@/context/shop/ShoppingCart";
import { formatCurrency } from "@/utils/formatCurrency";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "@/data/allFoods.json";
import Link from "next/link";
export default function CartIems() {
  const { cartItems } = useShoppingCart();
  return (
    <section className="max-w-3xl  mx-auto mt-32">
      <ShoppingCart isOpen={false} />
      <div>
        <div
          className="flex items-center justify-center 
         font-semibold text-xl mt-16 border-t"
        >
          Total :
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>

        <Link href={"/menu"}>
          <button className="mt-8" type="submit">
            send your order
          </button>
        </Link>
      </div>
    </section>
  );
}
