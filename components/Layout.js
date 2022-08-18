import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
