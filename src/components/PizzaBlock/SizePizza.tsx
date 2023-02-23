import React from "react";

type SizePizzaType = {
  activeSyze: number;
  onSyzeActive: any;
  sizes: number[]
}

const SizePizza: React.FC <SizePizzaType> = ({ activeSyze, onSyzeActive, sizes }) => {
  return (
    <ul>
      {sizes.map((size, index) => (
        <li
          key={index}
          onClick={() => onSyzeActive(index)}
          className={activeSyze === index ? "active" : ""}
        >
          {size} см.
        </li>
      ))}
    </ul>
  );
};
export default SizePizza;
