import Link from "next/link";
import React from "react";

const Head = () => {
  return (
    <>
      <nav className="text-black font-bold">
        <ul className="flex gap-4 mx-auto">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Head;
