"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const router = usePathname();

  return (
    <nav>
      <ul className="flex gap-5 font-bold text-2xl mb-5">
        <li
          className={`text-gray-600 duration-200 hover:text-gray-300 ${
            router == "/" ? "text-gray-300" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`text-gray-600 duration-200 hover:text-gray-300 ${
            router == "/about" ? "text-gray-300" : ""
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`text-gray-600 duration-200 hover:text-gray-300 ${
            router == "/blog" ? "text-gray-300" : ""
          }`}
        >
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
