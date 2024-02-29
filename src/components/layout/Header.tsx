"use client";

import { ShoppingCart } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Cart from "./Cart";

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  const userName = userData?.email;
 

  return (
    <header className="flex items-center justify-between mb-8 border-b">.
      <nav
        className="flex items-center gap-2
       text-gray-500 font-semibold text-base mr-auto "
      >
        <Link
          className="flex- items-center 
       text-orange-500 italic"
          href={"/"}
        >
          <Image className="hidden" src="/imgs/Logo.png" alt="" width={64} height={64} />
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
      </nav>
      {/* ///////// Login */}
      <nav
        className="flex items-center gap-4 text-gray-600
       font-semibold text-sm mr-auto  "
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
      </nav>
      <Cart />
    </header>
  );
}
