"use client";

import Tabs from "@/components/layout/Tabs";
import { UseProfile } from "@/components/UseProfile";
import { PlusCircle, Trash2 } from "lucide-react";

import Link from "next/link";
import { SyntheticEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CategoriesPage() {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categories, setCategories] = useState("");
  const { loading: profileLoading, data: profileData } = UseProfile();

  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
  }, []);

  async function handleNewCategorySubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    const creationPromise = new Promise<void>(async (resolve, reject) => {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName }),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
      await toast.promise(creationPromise, {
        loading: "Creating...",
        success: <b>Category created!</b>,
        error: <b>Could not create.</b>,
      });
    });
  }

  if (profileLoading) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  // @ts-ignore
  if (!profileData.admin) {
    return (
      <>
        <div className="text-center text-2xl">Not admin</div>

        <button
          className="w-96 text-white bg-red-900
        text-xl mx-auto mt-2
         "
        >
          <Link href={"/"}>Back to main Page</Link>
        </button>
      </>
    );
  }

  return (
    <section className=" mt-8 max-w-md mx-auto ">
      <Tabs isAdmin={"isAdmin"} />
      <form className="mt-8 " onSubmit={handleNewCategorySubmit}>
        <div>
          <label className="font-semibold text-gray-700 ">
            Create new category
          </label>
        </div>
        <div className="flex gap-2">
          <input
            className=""
            type="text"
            value={newCategoryName}
            onChange={(ev) => setNewCategoryName(ev.target.value)}
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
