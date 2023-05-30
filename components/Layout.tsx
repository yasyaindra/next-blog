import React from "react";
import Head from "../components/Head";
import styles from "../styles/styles.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <div className="basis-1/2 lg:mx-auto sm:mx-5 mx-5 mt-5">
        <Head />
        <div className="container h-full mx-auto text-black bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
