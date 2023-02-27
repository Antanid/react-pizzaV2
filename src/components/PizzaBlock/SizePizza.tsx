import React from "react";

type SizePizzaType = {
  activeSyze: number;
  onSyzeActive: (index: number) => void;
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
