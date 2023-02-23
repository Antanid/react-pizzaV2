/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setSortIndex, setSortName } from "../../redux/slices/filterSlice";
import SortInfo from "./SortInfo";

const Sort : React.FC = () => {

  type sortItem = {name: string, sort: string};
  const [sortList] = useState<sortItem[]>([
    { name: "цене (убыв.)", sort: "-price" },
    { name: "цене (возр.)", sort: "price" },
    { name: "популярности (возр.)", sort: "rating" },
    { name: "популярности (убыв.)", sort: "-rating" },
    { name: "алфавиту", sort: "title" },
  ]);

  const [open, setOpen] = useState(true);
  const {sort} = useSelector(selectFilter);
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  const onSortChange = (index: number, name: string) => {
    dispatch(setSortIndex(index));
    dispatch(dispatch(setSortName(name)))
  };

  useEffect(() => {
    setOpen(!open);
  }, [sort.sortIndex]);

  const selectedList = sortList[sort.sortIndex].name;


  const openPopUp = () => {
    return setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
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
      onSortChange={(index: number, name: string) => onSortChange(index, name)}
      selectedList={selectedList}
      sortIndex={sort.sortIndex}
      sortList={sortList}
      openPopUp={openPopUp}
      open={open}
    />
  );
}

export default Sort;