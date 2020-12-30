import React from "react";
import card from "./styles/card.module.css";

function Card({ img, price, name }) {
  return (
    <>
      <div className={card.container}>
        <img src={"https://www.reliancedigital.in".concat(img)} />
        <p className={card.mobilename}>{name}</p>
        <div className={card.pricBtn}>
          <p className={card.price}>₹{price}</p>
          <button className={card.button}>buy now</button>
        </div>
      </div>
    </>
  );
}

export default Card;
