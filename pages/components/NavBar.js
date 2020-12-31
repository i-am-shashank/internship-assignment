import React from "react";
import Link from "next/link";
import nav from "./styles/nav.module.css";

function NavBar() {
  
  return (
    <>
      <div className={nav.container}>
        <Link href="/">
          <p className={nav.logotext}>Algo mobiles</p>
        </Link>
        <Link href="/Login">
          <button className={nav.login}>login</button>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
