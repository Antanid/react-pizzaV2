import React from "react";

const CategorInfo = ({ liText, categoryIndex, onClickCategory }) => {
  return (
    <ul>
      {liText.map((item, index) => (
        <li
          key={item}
          onClick={() => onClickCategory(index)}
          className={index === categoryIndex ? "active" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CategorInfo;
