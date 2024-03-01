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
          className="flex flex-wrap md:flex-row gap-4
       items-center justify-center text-center "
        >
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

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
            <button
              className="mt-8"
              type="submit"
            >
              
              send your order
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
