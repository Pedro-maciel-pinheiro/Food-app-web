import { useShoppingCart } from "@/context/ShoppingCartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { CartItem } from "@/context/shop/CartItem";
import storeItems from "@/data/allFoods.json";
import toast, { Toaster } from "react-hot-toast";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      <div className="grid grid-cols-3 gap-8  
       items-center justify-center text-center ">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        
      </div>

      <div>
      <div className="flex items-center justify-center 
         font-semibold text-xl mt-8 ">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
        <button onClick={()=> toast.success("Order Send")} className="mt-8" type="submit">
          send your order <Toaster position="top-center" />
        </button>
      </div>
    </>
  );
}
