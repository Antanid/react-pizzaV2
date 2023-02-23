import  PizzaBlock from "./PizzaBlock";
import { PizzaHeader } from "./PizzaHeader";
import Skeleton from "./Skeleton";

type PizzaType = {
  pizza: {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
  }[];
  status: string
};

const Pizza: React.FC<PizzaType> = ({ pizza, status }) => {
  const pizzasItem = pizza.map((item) => <PizzaBlock key={item.id} {...item} />);
  const skeletons = [...new Array(9)].map((_, index) => <Skeleton key={index} />);
  return (
    <>
      <PizzaHeader title="Все пиццы" />
      <div className="content__items">{status === "loading" ? skeletons : pizzasItem}</div>
    </>
  );
};

export default Pizza;
