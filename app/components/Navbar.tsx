import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5 font-bold text-2xl mb-5">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline">
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
