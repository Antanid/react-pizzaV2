 import style from './style/style.module.scss'

 type PizzaTypeProp = {
    types: number[];
    activeType: number;
    onTypeActive: (index : number) => void;
    typesName: string[]
   };
   
   const PizzaTypeSolo: React.FC <PizzaTypeProp> = ({types, activeType, onTypeActive, typesName}) => {
    return (
      <ul>
            {types.map((typeIndex, index) => (
              <li
                key={typeIndex}
                className={activeType === index ? style.active : ''}
                onClick={() => onTypeActive(index)}
              >
                {typesName[typeIndex]}
              </li>
            ))}
          </ul>
    )
  }
  
  export default PizzaTypeSolo;
  
  