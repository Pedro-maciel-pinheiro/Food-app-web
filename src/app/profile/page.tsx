"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { SyntheticEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Tabs from "@/components/layout/Tabs";

export default function Profile() {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const { status } = session;
  const [streetAddress, SetstreetAddress] = useState("");
  const [city, SetCity] = useState("");
  const [phone, SetPhone] = useState("");
  const [postalCode, SetPostalCode] = useState("");
  const [isAdmin, SetIsAdmin] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user!.name!);
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          SetstreetAddress(data.streetAddress);
          SetCity(data.city);
          SetPhone(data.phone);
          SetPostalCode(data.postalCode);
         
        });
      });
    }
  }, [status]);

  const userImage = session.data?.user?.image;
  const userEmail = session.data?.user?.email;

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  async function handleProfileInfoUpdate(ev: SyntheticEvent) {
    ev.preventDefault();
    const savingPromise = new Promise<void>(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          streetAddress,
          city,
          phone,
          postalCode,
        }),
      });
      if (response.ok) resolve();
      else reject();
    });
    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: <b>Settings saved!</b>,
      error: <b>Could not save.</b>,
    });
  }

  return (
    <section className="mt-8">
      <section
        className="mt-16 border-1  shadow-2xl shadow-black/60
        rounded-3xl
    "
      >
        <h1
          className="text-center text-orange-500 text-4xl mb-4
       font-semibold "
        >
          Personal Info
        </h1>
        <Tabs isAdmin={isAdmin} />

        <div
          className="w-32 p-4  rounded-3xl mx-auto border-2 border-orange-500 
        shadow-xl
        "
        >
          {userImage ? (
            <Image
              className="rounded-xl"
              src={userImage}
              alt="profile-image"
              width={96}
              height={96}
            />
          ) : (
            <div>No image available</div>
          )}
        </div>
        <div className="max-w-md mx-auto ">
          <div className="flex gap-2 ">
            <form className="flex-col" onSubmit={handleProfileInfoUpdate}>
              <div className="flex items-center justify-center gap-2">
                <p className="font-semibold">name:</p>
                <input
                  type="text"
                  placeholder="ur name"
                  value={userName}
                  onChange={(ev) => setUserName(ev.target.value)}
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="font-semibold">Email:</p>
                <input
                  type="email"
                  value={userEmail || ""}
                  disabled={true}
                  className="cursor-not-allowed"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="font-semibold">Phone:</p>
                <input
                  type="tel"
                  placeholder="Telephone"
                  value={phone}
                  onChange={(ev) => SetPhone(ev.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">
                  City <br /> Postal
                </p>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(ev) => SetCity(ev.target.value)}
                />

                <input
                  type="text"
                  placeholder="Postal code"
                  value={postalCode}
                  onChange={(ev) => SetPostalCode(ev.target.value)}
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <p className="font-semibold">Street:</p>
                <input
                  type="text"
                  placeholder="Street address"
                  value={streetAddress}
                  onChange={(ev) => SetstreetAddress(ev.target.value)}
                />
              </div>

              <button className=" mx-auto mt-4 mb-8" type="submit">
                <Toaster position="top-center" />
                Save
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}

{
  /* <label>
<input type="file" className="hidden" />
<span
  className="block cursor-pointer border border-gray-900 p-1
 rounded-xl text-center"
>
  Edit
</span>
</label> */
}
