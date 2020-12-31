import React from "react";
import { useRouter } from "next/router";
import { BsHeart } from "react-icons/bs";
import smartphone from "../components/styles/smartphone.module.css";
function slug() {
  const router = useRouter();
  const { n, p, i } = router.query;
  //   console.log({n, p, i});
  return (
    <>
      <div className={smartphone.container}>
        <img
          className={smartphone.image}
          src={"https://www.reliancedigital.in".concat(i)}
        />
        <div className={smartphone.buysection}>
          <p className={smartphone.name}>{n}</p>
          <div className={smartphone.dummytext}>
            <p>✓ onsite warranty</p>
            <p>✓ in stock</p>
            <p>✓ limited time</p>
          </div>
          <p className={smartphone.price}>Price: ₹{p}</p>
          <div className={smartphone.btncontainer}>
            <button className={smartphone.buy}>buy now</button>
            <button className={smartphone.cart}>add to cart</button>
            <BsHeart size="2rem" color="#fc5d5d" />
          </div>
          <p className={smartphone.description}>Description:</p>
          <p className={smartphone.lorem} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
    </>
  );
}

export default slug;
