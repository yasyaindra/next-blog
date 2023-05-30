import React from "react";
import Link from "next/link";
import styles from "../styles/styles.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className={styles.main}>
      <nav className="text-white">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="container h-full mx-auto text-black">{children}</div>
    </main>
  );
};

export default Layout;
