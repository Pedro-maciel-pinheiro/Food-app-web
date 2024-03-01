import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { CartItem } from "@/context/shop/CartItem";
import storeItems from "@/data/allFoods.json";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({}: ShoppingCartProps) {
  const { removeFromCart } = useShoppingCart();
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      <div>
        <div
          className="grid grid-cols-3 gap-8
       items-center justify-center text-center "
        >
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        
      </div>
    </>
  );
}
