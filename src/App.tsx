import React from "react";
import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";

import "./scss/app.scss";
import FullPizza from "./pages/FullPizza/FullPizza";
import MainLayouts from "./layouts/MainLayouts";

function App() {
  return (
      <Routes>
        <Route path="" element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Route>
      </Routes>
  );
}

export default App;
