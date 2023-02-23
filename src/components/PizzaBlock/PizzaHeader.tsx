import React from "react";

type PizzaHeaderType = {
  title: string;
};

export const PizzaHeader: React.FC<PizzaHeaderType> = ({ title }) => {
  return <h2 className="content__title">{title}</h2>;
};
