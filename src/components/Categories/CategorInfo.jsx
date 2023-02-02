import React from "react";

const CategorInfo = ({ liText, indexLi, onClickLi }) => {
  return (
    <ul>
      {liText.map((item, index) => (
        <li
          key={index}
          onClick={() => onClickLi(index)}
          className={index === indexLi ? "active" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CategorInfo;
