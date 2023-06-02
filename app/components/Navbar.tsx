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
          className={`text-white/90 duration-200 hover:text-white ${
            router == "/" ? "text-white" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`text-white/90 duration-200 hover:text-white ${
            router == "/about" ? "text-white" : ""
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`text-white/90 duration-200 hover:text-white ${
            router == "/blog" ? "text-white" : ""
          }`}
        >
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
