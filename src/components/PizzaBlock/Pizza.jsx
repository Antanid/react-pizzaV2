import { PizzaBlock } from "./PizzaBlock";
import { PizzaHeader } from "./PizzaHeader";
import Skeleton from "./Skeleton";

export default function Pizza({ pizza, status }) {
  const pizzasItem = pizza.map((item) =><PizzaBlock key={item.id} {...item} />);
  const skeletons = [...new Array(9)].map((_, index) => <Skeleton key={index} />);
  return (
    <>
      <PizzaHeader title="Все пиццы" />
      <div className="content__items">{status === "loading" ? skeletons : pizzasItem}</div>
    </>
  );
}
