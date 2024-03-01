import { useShoppingCart } from "@/context/ShoppingCartContext";
import { ShoppingCart as Shopcart } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div>
      {cartQuantity === 0 ? (
        <></>
      ) : (
        <>
          <div
            className="absolute translate-x-12 mt-0 bg-green-500 rounded-full w-5 h-5 flex items-center 
           justify-center"
          >
            {cartQuantity}
          </div>
          <div>
            <Link className="w-full" href={"/cart"}>
              <button onClick={openCart}>
                <Shopcart />
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
