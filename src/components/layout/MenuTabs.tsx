"use client";

import { CakeSlice, Pizza, Salad } from "lucide-react";
import Link from "next/link";

export default function MenuTabs() {
  return (
    <div className="grid grid-cols-3  justify-center items-center Menutabs ">
      <>
        <Link className="text-black flex items-center justify-center gap-2" href={"/menu"}>
        <Pizza />
          Pizza
          
        </Link>

        <Link  className="text-black flex items-center justify-center gap-2" href={"/menu/pasta"}>
        <Salad />
          Pasta/Salads
         
        </Link>
        <Link  className="text-black flex items-center justify-center gap-2"  href={"/menu/dessert"}>
        <CakeSlice />
          dessert
          
        </Link>
      </>
    </div>
  );
}
