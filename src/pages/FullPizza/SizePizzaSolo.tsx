import React from "react";
import style from './style/style.module.scss'

type SizePizzaType = {
  activeSyze: number;
  onSyzeActive: (index: number) => void;
  sizes: number[]
}

const SizePizzaSolo: React.FC <SizePizzaType> = ({ activeSyze, onSyzeActive, sizes }) => {
  return (
    <ul>
      {sizes.map((size, index) => (
        <li
          key={index}
          className={activeSyze === index ? style.active : ''}
          onClick={() => onSyzeActive(index)}
        >
          {size} см.
        </li>
      ))}
    </ul>
  );
};
export default SizePizzaSolo;
