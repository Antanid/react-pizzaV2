import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, selectCartItemById } from "../../redux/slices/cartSlice";
import { CartItemType } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

import PizzaAdd from "./PizzaAdd";
import SizePizza from "./SizePizza";
import TypePizza from "./TypePizza";

type PizzaBlockType = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
};

const PizzaBlock: React.FC<PizzaBlockType> = 
({ id, imageUrl, title, price, sizes, types }) => {
  const dispath = useDispatch();
  const pizzaCount = useSelector((state: RootState) => selectCartItemById(state, id));
  const [typesName] = useState(["Тонкое", "Традиционное"]);
  const [activeType, setActiveType] = useState(0);
  const [activeSyze, setActiveSyze] = useState(0);

  const onTypeActive = (index: number) => {
    setActiveType(index);
  };
  const onSyzeActive = (index: number) => {
    setActiveSyze(index);
  };

  const onClickAdd = () => {
    const item: CartItemType = {
      id,
      title,
      imageUrl,
      price,
      types: typesName[activeType],
      sizes: sizes[activeSyze],
      count: 0,
    };
    dispath(addProduct(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>
        <div className="pizza-block__selector">
          <TypePizza
            types={types}
            onTypeActive={(index : number) => onTypeActive(index)}
            activeType={activeType}
            typesName={typesName}
          />
          <SizePizza
            sizes={sizes}
            activeSyze={activeSyze}
            onSyzeActive={(index : number) => onSyzeActive(index)}
          />
        </div>
        <PizzaAdd pizzaCount={pizzaCount} price={price} onClickAdd={onClickAdd} />
      </div>
    </div>
  );
};

export default PizzaBlock;
