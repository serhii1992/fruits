import { useState } from "react";
import style from "./Catalog.module.css";

function Catalog() {
  const catalog = ["All", "Fruits", "Vegetables"];

 const[visible, setVisible] = useState(false)

 const rootClasses = [style.modal]
if(visible){
    rootClasses.push(style.visible)
} 

  return (
    <div className={style.catalog}>
      <span onClick={()=>{setVisible(!visible)}}>Catalog</span>
      <div className={rootClasses.join(' ')}>
        {catalog.map((el) => (
          <span onClick={()=>{
            console.log('false');
            setVisible(false)}}  key={el}>{el}</span>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
