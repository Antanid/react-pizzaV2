import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./scss/app.scss";

import Home from "./pages/Home/Home";
import MainLayouts from "./layouts/MainLayouts";
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ "./pages/Cart/Cart"));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza/FullPizza"));
const NotFoundBlock = React.lazy(() => import(/* webpackChunkName: "NotFoundBlock" */ "./components/NotFoundBlock/NotFoundBlock"));

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/pizza/:id"
          element={
            <Suspense>
              <FullPizza />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundBlock />} />
      </Route>
    </Routes>
  );
}

export default App;
