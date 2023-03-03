import React from "react";

type PriceProp = {
  price: number;
};

const CartPrice: React.FC<PriceProp> = ({ price }) => {
  return (
    <div className="cart__item-price">
      <b>{price} грн.</b>
    </div>
  );
};

export default CartPrice;
