import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortIndex, setSortName } from "../../redux/slices/filterSlice";
import SortInfo from "./SortInfo";

export default function Sort() {
  const [sortList] = useState([
    { name: "цене (убыв.)", sort: "-price" },
    { name: "цене (возр.)", sort: "price" },
    { name: "популярности (возр.)", sort: "rating" },
    { name: "популярности (убыв.)", sort: "-rating" },
    { name: "алфавиту", sort: "title" },
  ]);

  const [open, setOpen] = useState(true);
  const sortIndex = useSelector((state) => state.filterSlice.sort.sortIndex);
  const dispatch = useDispatch();

  const onSortChange = (index, name) => {
    dispatch(setSortIndex(index), dispatch(setSortName(name.sort)));
  };

  useEffect(() => {
    setOpen(!open);
  }, [sortIndex]);

  const selectedList = sortList[sortIndex].name;

  const openPopUp = () => {
    return setOpen(!open);
  };

  return (
    <SortInfo
      onSortChange={(index, name) => onSortChange(index, name)}
      selectedList={selectedList}
      sortIndex={sortIndex}
      sortList={sortList}
      openPopUp={openPopUp}
      open={open}
    />
  );
}
