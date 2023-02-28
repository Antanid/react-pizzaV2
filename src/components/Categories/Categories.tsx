/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selector";
import { setCategoryIndex } from "../../redux/filter/slice";
import CategorInfo from "./CategorInfo";

const Categories: React.FC = React.memo(() => {
  type liTextType = string;
  const [liText] = useState<liTextType[]>([
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);

  const { categoryIndex } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeCategory = useCallback((index: number) => {
    dispatch(setCategoryIndex(index));
  }, []);

  return (
    <div className="categories">
      <CategorInfo
        onChangeCategory={onChangeCategory}
        categoryIndex={categoryIndex}
        liText={liText}
      />
    </div>
  );
});
export default Categories;
