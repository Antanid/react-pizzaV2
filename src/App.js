import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFoundBlock/NotFoundBlock";

import "./scss/app.scss";
import AppContext from "./context";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
