import React, { useState } from "react";
import CategorInfo from "./CategorInfo";

export default function Categories() {
  const [liText] = useState(["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]);
  const [indexLi, setIndexLi] = useState(0);

  const onClickLi = (index) => {
    setIndexLi(index);
  };

  return (
    <div className="categories">
      <CategorInfo
       onClickLi={(index) => onClickLi(index)} 
       indexLi={indexLi} 
       liText={liText} 
       />
    </div>
  );
}
