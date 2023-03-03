/* eslint-disable react-hooks/exhaustive-deps */
import qs from "qs";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Categories, 
  Pagination,
  Pizza,
  Sort,
  NotFound
} from "../../components";

import { selectFilter } from "../../redux/filter/selector";
import { setPaginationPage, setUrlFilters } from "../../redux/filter/slice";
import { filterTypeState, SortTypeState } from "../../redux/filter/types";
import { fetchPizzas } from "../../redux/pizza/asyncActions";
import { RootState, useAppDispatch } from "../../redux/store";


const Home: React.FC = () => {
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { searchValue } = useSelector(selectFilter);
  const { categoryIndex, sort, paginationNumber } = useSelector(selectFilter);
  const { items, status } = useSelector((state: RootState) => state.pizzaSlice);
  const dispatch = useAppDispatch();

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
      const params = (qs.parse(window.location.search.substring(1))as unknown) as SortTypeState & filterTypeState;
      dispatch(setUrlFilters(params));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    const IndexCategory = categoryIndex > 0 ? `category=${categoryIndex}` : "";
    const sortNameRep = sort.sortName.replace("-", "");
    const sortType = sort.sortName.includes("-") ? "desc" : "asc";
    const search = searchValue ? `search=${searchValue}` : "";
    const pagePagination = categoryIndex !== 0 || searchValue ? 1 : paginationNumber;

    if (!isSearch.current) {
      dispatch(
        fetchPizzas({ IndexCategory, sortNameRep, sortType, search, pagePagination })
      );
    }
    window.scrollTo(0, 0);
    isSearch.current = false;
  }, [categoryIndex, sort, searchValue, paginationNumber]);

  const onChangePage = (page: number) => {
    dispatch(setPaginationPage(page));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      {status === "error" ? (
        <NotFound
          pText2="Попробуйте пезезрагрузить страницу или подождать"
          h1Text="Пиццы временно пропали"
          pText1="Вероятней всего скоро они появится."
          buttonText="Вернуться назад"
        />
      ) : (
        <>
          <Pizza pizza={items} status={status} />
          <Pagination
            paginationNumber={paginationNumber}
            categoryIndex={categoryIndex}
            onChangePage={(page: number) => onChangePage(page)}
          />
        </>
      )}
    </div>
  );
};
export default Home;
