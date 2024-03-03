"use client";

import { AlignJustify } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Cart from "./Cart";
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react";

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  const userName = userData?.email;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)
  return (
    <header
      className="fixed md:relative  md:bg-transparent rounded-xl 
    gap-8 bg-white/80  md:border-b flex  justify-between "
    >
      <div className="">
        <Cart />
        <div
          className=" flex  md:hidden  h-11 items-center justify-center border-4 rounded-xl"
          onClick={() => setMobileNavOpen((prev) => !prev)}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {mobileNavOpen && (
          <>
            <div
              onClick={() => setMobileNavOpen(false)}
              className="md:hidden p-4 bg-white/80  transition-all border-2
        mt-2 rounded-xl flex flex-col gap-4 absolute z-50 font-semibold w-full
        "
            >
              <Link className="hover:text-orange-500 " href={"/"}>
                <button className="bg-slate-200">Home</button>
              </Link>
              <Link className="hover:text-orange-500" href={"/menu"}>
                <button className="bg-slate-200">Menu</button>
              </Link>
              <Link className="hover:text-orange-500" href={"/about"}>
                <button className="bg-slate-200">About</button>
              </Link>

              <Link className="hover:text-orange-500" href={"/contact"}>
                <button className="bg-slate-200">Contact</button>
              </Link>
            </div>
          </>
        )}
      </div>
      <div
        className="md:flex items-center gap-2
       text-gray-500 font-semibold text-base mr-auto hidden"
      >
        <Link
          className="flex- items-center 
       text-orange-500 italic"
          href={"/"}
        >
          <Image
            className="hidden md:block"
            src="/imgs/Logo.png"
            alt=""
            width={64}
            height={64}
          />
        </Link>
        <Link className="hover:text-orange-500" href={"/"}>
          Home
        </Link>
        <Link className="hover:text-orange-500" href={"/menu"}>
          Menu
        </Link>
        <Link className="hover:text-orange-500" href={"/about"}>
          About
        </Link>
        <Link className="hover:text-orange-500" href={"/contact"}>
          Contact
        </Link>
      </div>

      {/* ///////// Login */}
      <nav
        className="flex items-center justify-center gap-4 text-gray-600
       font-semibold text-sm   "
      >
        {status === "authenticated" && (
          <>
            <Link href={"/profile"}> {userName}</Link>
            <button
              onClick={() => signOut()}
              className="bg-red-600 rounded-full text-white px-4 py-1 
            border-none transition-all active:translate-x-2"
            >
              Logout
            </button>
          </>
        )}

        <div className="flex gap-2  justify-center items-center">
          {status === "unauthenticated" && (
            <>
              <Link
                className="transition-all active:translate-y-1"
                href={"/login"}
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="bg-orange-500 rounded-full
              transition-all active:translate-y-1
               text-white px-4  py-1"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="hidden md:block"></div>
      </nav>
    </header>
  );
}
