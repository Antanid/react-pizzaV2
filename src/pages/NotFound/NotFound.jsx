import React from "react";
import cartEmpty from "../../assets/img/empty-cart.png";

const NotFoundBlock = ({ h1Text, pText1, pText2, buttonText }) => {
  return (
    <div class="content">
      <div class="container container--cart">
        <div class="cart cart--empty">
          <h2>
            {h1Text} <icon>😕</icon>
          </h2>
          <p>
            {pText1}
            <br />
            {pText2}
          </p>
          <img src={cartEmpty} alt="Empty cart" />
          <a href="/" class="button button--black">
            <span>{buttonText}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlock;
