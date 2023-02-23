import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string,
    title: string,
    price: number
  }>();
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

  if (!pizza) {
    return <div>"Загрузка..."</div>;
  }

  return (  
    <div>
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} грн</h4>
    </div>
  );
};

export default FullPizza;
