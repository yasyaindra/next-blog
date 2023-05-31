import React from "react";
import Head from "../components/Head";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yasya Indra Blog",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <div
        className={`basis-1/2 lg:mx-auto sm:mx-5 mx-5 mt-5 ${poppins.className}`}
      >
        <Head />
        <div className="container h-full mx-auto text-black bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
