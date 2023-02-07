import { useState } from "react";
import PizzaAdd from "./PizzaAdd";
import SizePizza from "./SizePizza";
import TypePizza from "./TypePizza";

export const PizzaBlock = ({ imageUrl, title, price, sizes, types }) => {
  const [typesName] = useState(["Тонкое", "Традиционное"]);
  const [activeType, setActiveType] = useState(0);
  const [activeSyze, setActiveSyze] = useState(0);

  const onTypeActive = (index) => {
    setActiveType(index);
  };
  const onSyzeActive = (index) => {
    setActiveSyze(index);
  };
  return (
    <div className="pizza-block-wrapper">
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <TypePizza
          types={types}
          onTypeActive={(index) => onTypeActive(index)}
          activeType={activeType}
          typesName={typesName}
        />
        <SizePizza
          sizes={sizes}
          activeSyze={activeSyze}
          onSyzeActive={(index) => onSyzeActive(index)}
        />
      </div>
      <PizzaAdd price={price} />
    </div>
    </div>
  );
};
