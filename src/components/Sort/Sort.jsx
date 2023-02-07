import React, { useState } from "react";
import SortInfo from "./SortInfo";

export default function Sort({setSortName }) {

  const [sortIndex, setSortIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const [sortList] = useState([
    {name: "цене (убыв.)", sort: '-price'},
    {name: "цене (возр.)", sort: 'price'},
    {name: "популярности (возр.)", sort: 'rating'},
    {name: "популярности (убыв.)", sort: '-rating'},
    {name: "алфавиту", sort: 'title'},
    ]);

  const selectedList = sortList[sortIndex].name;

  const openPopUp = () => {
    return setOpen(!open);
  };
  const onSelected = (index, sort) => {
    setSortIndex(index);
    setOpen(false);
    setSortName(sort)
  };
  return (
    <SortInfo
      selectedList={selectedList}
      sortIndex={sortIndex}
      onSelected={(index, sort) => onSelected(index, sort)}
      sortList={sortList}
      openPopUp={openPopUp}
      open={open}
    />
  );
}
