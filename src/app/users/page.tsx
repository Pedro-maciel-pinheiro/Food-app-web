"use client";

import Tabs from "@/components/layout/Tabs";
import { Settings2, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function Users() {
  const session = useSession();
  const userEmail = session.data?.user?.email;
  return (
    <section>
      <Tabs isAdmin={"true"} />
      <div className="mt-16">
        <div className="flex max-w-xl mx-auto justify-center items-center gap-4">
          <input type="email" value={userEmail || ""} disabled={true} />
          <label className="font-semibold">Admin?</label>
          <input type="checkbox" value={""} />
          <button className="w-20 h-10" type="submit">
          &quot;
            <Settings2 />
          </button>
          <button
            className="w-20 h-10 bg-red-700 hover:bg-red-900 text-white"
            onClick={() => toast.success("Deleted")}
          >
            <Toaster />
            <Trash2 />
          </button>
        </div>
        <div className="flex max-w-xl mx-auto justify-center items-center gap-4">
          <input type="email" value={userEmail || ""} disabled={true} />
          <label className="font-semibold">Admin?</label>
          <input type="checkbox"  />
          <button className="w-20 h-10" type="submit">
   
            <Settings2 />
          </button>
          <button
            className="w-20 h-10 bg-red-700 hover:bg-red-900 text-white"
            onClick={() => toast.success("Deleted")}
          >
            <Toaster />
            <Trash2 />
          </button>
        </div>
        <div className="flex max-w-xl mx-auto justify-center items-center gap-4">
          <input type="email" value={userEmail || ""} disabled={true} />
          <label className="font-semibold">Admin?</label>
          <input type="checkbox"  />
          <button className="w-20 h-10" type="submit">
        
            <Settings2 />
          </button>
          <button
            className="w-20 h-10 bg-red-700 hover:bg-red-900 text-white"
            onClick={() => toast.success("Deleted")}
          >
            <Toaster />
            <Trash2 />
          </button>
        </div>
      </div>
    </section>
  );
}
