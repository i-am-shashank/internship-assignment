import NavBar from "./NavBar";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
