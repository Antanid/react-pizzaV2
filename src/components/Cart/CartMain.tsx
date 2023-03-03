import React from "react";
import BtnMinusPizza from "./BtnMinusPizza";
import BtnRemoveCart from "./BtnRemoveCart";
import CartPizzaText from "./CartPizzaText";
import CartPlusPizza from "./CartPlusPizza";
import CartPrice from "./CartPrice";

type CartItemType = {
  count: number;
  id: string;
  imageUrl: string;
  price: number;
  sizes: number;
  title: string;
  types: string;
  onClickPlus: (id: string) => void;
  onClickMinus: (id: string) => void;
  onClickRemove: (id: string) => void;
};

const CartMain: React.FC<CartItemType> = ({
  imageUrl,
  title,
  types,
  sizes,
  count,
  price,
  id,
  onClickPlus,
  onClickMinus,
  onClickRemove,
}) => {
  return (
    <div className="cart__item">
      <CartPizzaText imageUrl={imageUrl} title={title} types={types} sizes={sizes} />
      <div className="cart__item-count">
        <BtnMinusPizza count={count} onClickMinus={onClickMinus} id={id} />
        <b>{count}</b>
        <CartPlusPizza onClickPlus={onClickPlus} id={id} />
      </div>
      <CartPrice price={price * count} />
      <BtnRemoveCart id={id} onClickRemove={onClickRemove} />
    </div>
  );
};

export default CartMain;
