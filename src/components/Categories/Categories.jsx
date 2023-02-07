import React, { useState } from "react";
import CategorInfo from "./CategorInfo";

export default function Categories({ categoryIndex, setCategoryIndex }) {
  const [liText] = useState(["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]);

  const onClickCategory = (index) => {
    setCategoryIndex(index);
  };

  return (
    <div className="categories">
      <CategorInfo
        onClickCategory={(index) => onClickCategory(index)}
        categoryIndex={categoryIndex}
        liText={liText}
      />
    </div>
  );
}
