import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
