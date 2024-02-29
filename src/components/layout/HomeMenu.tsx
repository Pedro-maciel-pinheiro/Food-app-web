
import SectionText from "./SectionText";
import { StoreItem } from "../StoreItem";
import storeItems from "@/data/pizza.json"



export default function HomeMenu() {
  return (
    <section className="mt-16 ">
      
      <div className="text-center mb-4 border-b">
        <SectionText subText="check out " mainText="Menu" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    
    </section>
  );
}
