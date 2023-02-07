import React from "react";
import ReactPaginate from "react-paginate";
import style from "./style/style.module.scss";

const Pagination = ({ onChangePage, categoryIndex }) => {
  return (
    <>
      {categoryIndex === 0 ?(
        <ReactPaginate
          className={style.root}
          breakLabel="..."
          nextLabel=">"
          onPageChange={(number) => onChangePage(number.selected + 1)}
          pageRangeDisplayed={4}
          pageCount={3}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      ) : null}
    </>
  );
};

export default Pagination;
