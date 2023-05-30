import Link from "next/link";
import React from "react";

const Head = () => {
  return (
    <>
      <nav className="text-black font-bold text-4xl mb-5">
        <ul className="flex gap-x-8">
          <li className="hover:text-sky-700 duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-sky-700 duration-300">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Head;
