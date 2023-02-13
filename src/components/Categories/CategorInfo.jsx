import React from "react";

const CategorInfo = React.memo(({ liText, categoryIndex, onChangeCategory }) => {
  return (
    <ul>
      {liText.map((item, index) => (
        <li
          key={item}
          onClick={() => onChangeCategory(index)}
          className={index === categoryIndex  ? "active" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
});

export default CategorInfo;
