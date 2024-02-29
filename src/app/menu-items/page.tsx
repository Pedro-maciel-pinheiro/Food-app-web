import SectionText from "@/components/layout/SectionText";
import Tabs from "@/components/layout/Tabs";

import { StoreItem } from "@/components/StoreItem";

import storedessert from "@/data/dessert.json";
import storepizza from "@/data/pizza.json";
import storepasta from "@/data/pasta.json";

export default function MenuItems() {
  return (
    <section className="max-w-3xl mx-auto mb-8">
      <Tabs isAdmin={"isAdmin"} />
      <h1 className="text-center mt-8 text-xl mb-8">All items in Menu</h1>
      <div className="mt-8 mb-2">
        <SectionText subText={""} mainText={"Pizza"} />
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {storepizza.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
      <div className="mt-8 mb-2">
        <SectionText subText={""} mainText={"Pasta - Salad"} />
      </div>

      <div className="grid grid-cols-3 gap-4 ">
        {storepasta.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
      <div className="mt-8 mb-2">
        <SectionText subText={""} mainText={"Dessert"} />
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {storedessert.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>

      <div className="max-w-lg mx-auto mt-24">
        <p>Menu</p>
        <div className="flex  gap-2 justify-center items-start">
          <input type="text" placeholder="Item name" />
          <input type="file" className="mt-4 rounded-md" />
        </div>

        <button type="submit"> Add</button>
      </div>
    </section>
  );
}
