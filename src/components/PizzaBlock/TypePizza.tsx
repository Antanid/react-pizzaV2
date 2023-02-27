 
 type PizzaType = {
  types: number[];
  activeType: number;
  onTypeActive: (index : number) => void;
  typesName: string[]
 };
 
 const TypePizza: React.FC <PizzaType> = ({types, activeType, onTypeActive, typesName}) => {
  return (
    <ul>
          {types.map((typeIndex, index) => (
            <li
              key={typeIndex}
              className={activeType === index ? "active" : ""}
              onClick={() => onTypeActive(index)}
            >
              {typesName[typeIndex]}
            </li>
          ))}
        </ul>
  )
}

export default TypePizza;



