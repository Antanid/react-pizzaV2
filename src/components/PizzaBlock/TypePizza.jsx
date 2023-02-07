 const TypePizza = ({types, activeType, onTypeActive, typesName}) => {
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



