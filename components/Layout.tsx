import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-white">
      <div className="container h-full mx-auto text-black">{children}</div>
    </div>
  );
};

export default Layout;
