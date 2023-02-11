import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../../components/Categories/Categories";
import Pagination from "../../components/Pagination/Pagination";
import Pizza from "../../components/PizzaBlock/Pizza";
import Sort from "../../components/Sort/Sort";
import AppContext from "../../context";
import { setPaginationPage } from "../../redux/slices/filterSlice";

const Home = () => {
  const { searchValue } = useContext(AppContext);
  const [pizza, setPizza] = useState([]);
  const [skeletonLoader, setSkeletonLoader] = useState(false);

  const { categoryIndex, sort, paginationNumber } = useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const IndexCategory = categoryIndex === 0 ? "" : `category=${categoryIndex}`;
      const sortNameRep = sort.sortName.replace("-", "");
      const sortType = sort.sortName.includes("-") ? "desc" : "asc";
      const search = searchValue ? `search=${searchValue}` : "";
      console.log(paginationNumber, categoryIndex)
      try {
        setSkeletonLoader(true);
        const pizzaArr = await axios.get(
          `https://63dc22b6b8e69785e49282a5.mockapi.io/pizza?page=${paginationNumber}
          &limit=4&${IndexCategory}&sortBy=${sortNameRep}
          &order=${sortType}
          &${search}`
        );
        setPizza(pizzaArr.data);
        setSkeletonLoader(false);
        window.scrollTo(0, 0);
      } catch (error) {
        alert("Пиццы не загрузилась");
      }
    }
    fetchData();
  }, [categoryIndex, sort.sortName, searchValue, paginationNumber]);

  const onChangePage = (number) => {
   dispatch(setPaginationPage(number));
    console.log(number)
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <Pizza pizza={pizza} skeletonLoader={skeletonLoader} />
      <Pagination 
      paginationNumber={paginationNumber}
      categoryIndex={categoryIndex} 
      onChangePage={(number) => onChangePage(number)} />
    </div>
  );
};
export default Home;
