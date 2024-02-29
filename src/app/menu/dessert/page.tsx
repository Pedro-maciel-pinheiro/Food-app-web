import { StoreItem } from "@/components/StoreItem";
import MenuTabs from "@/components/layout/MenuTabs";

import storeItems from "@/data/dessert.json";

export default function PastaMenu() {
  return (
    <section className="mt-16 ">
      <div>
        <MenuTabs />
        <h1
          className="text-center font-semibold text-3xl mb-4
           text-orange-500 italic "
        >
          Check out what we have
        </h1>

        <div className="grid grid-cols-3 gap-4 ">
          {storeItems.map((item) => (
            <div key={item.id}>
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
