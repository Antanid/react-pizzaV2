import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryIndex } from "../../redux/slices/filterSlice";
import CategorInfo from "./CategorInfo";

export default function Categories() {
  const [liText] = useState(["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]);

  const categoryIndex = useSelector((state) => state.filterSlice.categoryIndex);
  const dispatch = useDispatch();

  useEffect(() => {
console.log('2313')
  }, [categoryIndex])

  const onChangeCategory = useCallback(
    (index) => {
      dispatch(setCategoryIndex(index));
  }, []);

  return (
    <div className="categories">
      <CategorInfo
        onChangeCategory={(index) => onChangeCategory(index)}
        categoryIndex={categoryIndex}
        liText={liText}
      />
    </div>
  );
}
