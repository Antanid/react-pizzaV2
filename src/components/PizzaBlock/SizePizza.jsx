import React from "react";

const SizePizza = ({ activeSyze, onSyzeActive, sizes }) => {
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
