/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import qs from "qs";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Categories from "../../components/Categories/Categories";
import Pagination from "../../components/Pagination/Pagination";
import Pizza from "../../components/PizzaBlock/Pizza";
import Sort from "../../components/Sort/Sort";
import AppContext from "../../context";
import { setPaginationPage, setUrlFilters } from "../../redux/slices/filterSlice";

const Home = () => {
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { searchValue } = useContext(AppContext);
  const [pizza, setPizza] = useState([]);
  const [skeletonLoader, setSkeletonLoader] = useState(false);

  const { categoryIndex, sort, paginationNumber } = useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryIndex,
        sortIndex: sort.sortIndex,
        sortName: sort.sortName,
        paginationNumber,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryIndex, sort, paginationNumber]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setUrlFilters(params));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const IndexCategory = categoryIndex > 0 ? `category=${categoryIndex}` : "";
      const sortNameRep = sort.sortName.replace("-", "");
      const sortType = sort.sortName.includes("-") ? "desc" : "asc";
      const search = searchValue ? `search=${searchValue}` : "";
      const pagePagination = categoryIndex !== 0 || searchValue ? 1 : paginationNumber;
      try {
        setSkeletonLoader(true);
        const pizzaArr = await axios.get(
          `https:63dc22b6b8e69785e49282a5.mockapi.io/pizza?page=${pagePagination}
               &limit=4&${IndexCategory}&sortBy=${sortNameRep}&order=${sortType}&${search}`
        );
        setPizza(pizzaArr.data);
        setSkeletonLoader(false);
        window.scrollTo(0, 0);
      } catch (error) {
        alert("Пиццы не загрузилась");
      }
    }
    if (!isSearch.current) {
      fetchData();
    }
    isSearch.current = false;
  }, [categoryIndex, sort, searchValue, paginationNumber]);

  const onChangePage = (number) => {
    dispatch(setPaginationPage(number));
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
        onChangePage={(number) => onChangePage(number)}
      />
    </div>
  );
};
export default Home;
