import React from "react";

function Layout({ children }) {
  return (
    <>
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
