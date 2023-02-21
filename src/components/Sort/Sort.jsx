/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setSortIndex, setSortName } from "../../redux/slices/filterSlice";
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
  const {sort} = useSelector(selectFilter);
  const dispatch = useDispatch();
  const sortRef = useRef();

  const onSortChange = (index, name) => {
    dispatch(setSortIndex(index), dispatch(setSortName(name.sort)));
  };

  useEffect(() => {
    setOpen(!open);
  }, [sort.sortIndex]);

  const selectedList = sortList[sort.sortIndex].name;

  const openPopUp = () => {
    return setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const path = event.composedPath().includes(sortRef.current);
      if (!path) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside)
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <SortInfo
      sortRef={sortRef}
      onSortChange={(index, name) => onSortChange(index, name)}
      selectedList={selectedList}
      sortIndex={sort.sortIndex}
      sortList={sortList}
      openPopUp={openPopUp}
      open={open}
    />
  );
}
