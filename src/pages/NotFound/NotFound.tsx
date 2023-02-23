import React from "react";
import cartEmpty from "../../assets/img/empty-cart.png";

type notFountType = {
  h1Text: string;
  pText1: string;
  pText2: string;
  buttonText: string;
}

const NotFound: React.FC <notFountType> = ({ h1Text, pText1, pText2, buttonText }) => {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            {h1Text} <span>😕</span>
          </h2>
          <p>
            {pText1}
            <br />
            {pText2}
          </p>
          <img src={cartEmpty} alt="Empty cart" />
          <a href="/" className="button button--black">
            <span>{buttonText}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
