import { PizzaBlock } from "./PizzaBlock";
import pizzaJson from "../../assets/pizza.json";

export default function Pizza() {
  return (
    <>
      {pizzaJson.map((item) => (
        <PizzaBlock
          key={item.id}
          {...item}
        />
      ))}
    </>
  );
}
