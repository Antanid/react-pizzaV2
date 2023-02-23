import React from "react";
import style from "./sass/style.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p>К сожалению данная страница недоступна в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFoundBlock;
