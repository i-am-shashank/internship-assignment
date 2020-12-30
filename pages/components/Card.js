import React from "react";
import card from "./styles/card.module.css";
import { FiShoppingCart, FiBookmark } from "react-icons/fi";

function Card({ img, price, name }) {
  return (
    <>
      <div className={card.container}>
        <img
          className={card.image}
          src={"https://www.reliancedigital.in".concat(img)}
        />
        <p className={card.mobilename}>{name}</p>
        <div className={card.pricBtn}>
          <p className={card.price}>₹{price}</p>
          <div className={card.cart}>
            <FiShoppingCart color="#fc5d5d" size="1.5rem" />
            <FiBookmark color="#fc5d5d" size="1.5rem" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
