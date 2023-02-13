import React from "react";
import ReactPaginate from "react-paginate";
import style from "./style/style.module.scss";

const Pagination = ({ onChangePage, categoryIndex, paginationNumber }) => {
  return (
    <>
      {categoryIndex === 0 ? (
        <form>
          <ReactPaginate
            className={style.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(number) => onChangePage(number.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={paginationNumber - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </form>
      ) : null}
    </>
  );
};

export default Pagination;
