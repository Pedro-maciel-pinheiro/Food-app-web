"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabsProps {
  isAdmin: string;
}

export default function Tabs({ isAdmin }: TabsProps) {
  const path = usePathname();
  return (
    <div className="flex gap-2 tabs justify-center">
      <Link className={path === "/profile" ? "active" : ""} href={"/profile"}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            className={path === "/categories" ? "active" : ""}
            href={"/categories"}
          >
            Categories
          </Link>
          <Link
            className={path === "/menu-items" ? "active" : ""}
            href={"/menu-items"}
          >
            Menu items
          </Link>
          <Link className={path === "/users" ? "active" : ""} href={"/users"}>
            Users
          </Link>
        </>
      )}
    </div>
  );
}
