import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";

import style from "./style/style.module.scss";

import { addProduct } from "../../redux/cart/slice";
import { CartItemType } from "../../redux/cart/types";
import { selectCartItemById } from "../../redux/cart/selectors";

import Skeleton from "../../components/PizzaBlock/Skeleton";
import PizzaTypeSolo from "./PizzaTypeSolo";
import SizePizzaSolo from "./SizePizzaSolo";
import PizzaAddSolo from "./PizzaAddSolo";


const FullPizza: React.FC = () => {
  const [typesName] = useState<string[]>(["Тонкое", "Традиционное"]);
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSyze, setActiveSyze]= useState<number> (0);

  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    types: number[];
    sizes: number[];
    id: string
  }>();

  const dispath = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const pizzaData = async () => {
      try {
        const { data } = await axios.get("https://63dc22b6b8e69785e49282a5.mockapi.io/pizza/" + id);
        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    };
    pizzaData();
  }, [id]);
  const addPizzaId = pizza ? pizza.id : '';
  const pizzaCount = useSelector((state: RootState) => selectCartItemById(state, addPizzaId));

  const onClickAdd = () => {
    if(pizza){
      const { id, title, imageUrl, price, sizes } = pizza;
      const item: CartItemType = {
        id,
        title,
        imageUrl,
        price,
        types: typesName[activeType],
        sizes: sizes[activeSyze],
        count: 0,
      };
      dispath(addProduct(item))
    }
    ;
  };

  const onTypeActive = (index: number) => {
    setActiveType(index);
  };

  const onSyzeActive = (index: number) => {
    setActiveSyze(index);
  };

  if (!pizza) {
    return <Skeleton />;
  }
  console.log(pizza.id);

  return (
    <div className={style.pizza}>
      <div className={style.pizzaImg}>
        <img src={pizza.imageUrl} alt="pizza" />
      </div>
      <div className={style.change}>
        <h2>{pizza.title}</h2>
        <div className={style.selector}>
          <PizzaTypeSolo
            typesName={typesName}
            types={pizza.types}
            onTypeActive={(index: number) => onTypeActive(index)}
            activeType={activeType}
          />
          <SizePizzaSolo
            sizes={pizza.sizes}
            activeSyze={activeSyze}
            onSyzeActive={(index: number) => onSyzeActive(index)}
          />
        </div>
        <PizzaAddSolo pizzaCount={pizzaCount} price={pizza.price} onClickAdd={onClickAdd} />
      </div>
    </div>
  );
};

export default FullPizza;
