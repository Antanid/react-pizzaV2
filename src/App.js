import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Pizza from "./components/PizzaBlock/Pizza";
import Sort from "./components/Sort/Sort";

import "./scss/app.scss";

function App() {  
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <Pizza />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
