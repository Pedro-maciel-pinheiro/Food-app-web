"use client";

import Tabs from "@/components/layout/Tabs";
import { PlusCircle, Trash2 } from "lucide-react";


export default function CategoriesPage() {
  return (
    <section className=" max-w-md mx-auto mt-16 md:mt-8">
      <Tabs isAdmin={"true"} />
      <form className="mt-8 " >
        <div>
          <label className="font-semibold text-gray-700 ">
            Create new category
          </label>
        </div>
        <div className="flex gap-2">
          <input
            className=""
            type="text"
           
            
          />
          <div className="pt-0 flex gap-2 items-center justify-center">
          <button className="w-20 h-10 bg-red-700 hover:bg-red-900 text-white flex items-center justify-center " >
          <Trash2 />
            </button>
            <button className="w-20 h-10 flex items-center justify-center pt " type="submit">
             <PlusCircle />
            </button>
          </div>
        </div>
      </form>
     
    </section>
  );
}
