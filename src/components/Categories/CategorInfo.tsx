import React from "react";

type CategoriesProps = {
  liText: string[];
  categoryIndex: number;
  onChangeCategory: (index: number) => void;
};

const CategorInfo: React.FC<CategoriesProps> = React.memo(
  ({ liText, categoryIndex, onChangeCategory }) => {
    return (
      <ul>
        {liText.map((item, index) => (
          <li
            key={item}
            onClick={() => onChangeCategory(index)}
            className={index === categoryIndex ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
);

export default CategorInfo;
