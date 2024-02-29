import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "@/data/allFoods.json";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <>
      <div className="border-2 rounded-xl
      shadow-xl shadow-black/50">
        <Image className="mx-auto" src={item.imgUrl} width={125} height={125} alt={""}/>
        <div className=" ">
          <div>
            {item.name}
            {quantity > 1 && (
              <span className="text-xl" >
              {""}  x{quantity}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center" > {formatCurrency(item.price * quantity)}</div>

          <div className="text-sm  mx-auto w-32" >
          <button  type="submit"  onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
        
      
      </div>
    </>
  );
}
