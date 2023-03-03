import React from "react";

type PizzaTextProp = {
    imageUrl: string;
    title: string;
    types: string;
    sizes: number
}

const CartPizzaText: React.FC <PizzaTextProp> = ({ imageUrl, title, types, sizes }) => {
  return (
    <>
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {types} тесто, {sizes} см.
        </p>
      </div>
    </>
  );
};

export default CartPizzaText;
