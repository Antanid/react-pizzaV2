import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

import Categories from "../../components/Categories/Categories";
import Pagination from "../../components/Pagination/Pagination";
import Pizza from "../../components/PizzaBlock/Pizza";
import Sort from "../../components/Sort/Sort";
import AppContext from "../../context";

const Main = () => {
  const [pizza, setPizza] = useState([]);
  const [skeletonLoader, setSkeletonLoader] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [sortName, setSortName] = useState("-price");
  const [paginationNum, setPaginationNum] = useState(1);

  const { searchValue } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const IndexCategory = categoryIndex === 0 ? "" : `category=${categoryIndex}`;
      const sortNameRep = sortName.replace("-", "");
      const sortType = sortName.includes("-") ? "desc" : "asc";
      const search = searchValue ? `search=${searchValue}` : "";

      try {
        setSkeletonLoader(true);
        const pizzaArr = await axios.get(
          `https://63dc22b6b8e69785e49282a5.mockapi.io/pizza?page=${paginationNum}&limit=4&${IndexCategory}&sortBy=${sortNameRep}&order=${sortType}&${search}`
        );
        setPizza(pizzaArr.data);
        setSkeletonLoader(false);
        window.scrollTo(0, 0);
      } catch (error) {
        alert("Пиццы не загрузилась");
      }
    }
    fetchData();
  }, [categoryIndex, sortName, searchValue, paginationNum]);

  const onChangePage = (number) => {
    setPaginationNum(number)
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories setCategoryIndex={setCategoryIndex} categoryIndex={categoryIndex} />
        <Sort setSortName={setSortName} />
      </div>
      <Pizza pizza={pizza} skeletonLoader={skeletonLoader} />
      <Pagination
      categoryIndex={categoryIndex}
       onChangePage={(number) => onChangePage(number)}
       />
    </div>
  );
};
export default Main;
