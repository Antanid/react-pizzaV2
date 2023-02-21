import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFoundBlock/NotFoundBlock";

import "./scss/app.scss";
import AppContext from "./context";
import FullPizza from "./pages/FullPizza/FullPizza";
import MainLayouts from "./layouts/MainLayouts";

function App() {
  return (
    <AppContext.Provider>
      <Routes>
        <Route path="" element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
