import { addToCart } from "../../redux/cartSlice";
import {useDispatch } from "react-redux";
import styles from "./Counter.module.css";

function Counter({ totalObj, calcSum, ...itemKeys }) {
  const dispatch = useDispatch();
  
  const addItemToCart = (obj) => {
    dispatch(addToCart(obj));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.counterBlock}>
        <button
          className={styles.dec}
          disabled={!totalObj || totalObj?.totalKg <= 0}
          onClick={() => {
            calcSum(-1);
          }}
        ></button>

        <div className={styles.count}> {totalObj?.totalKg.toFixed(2) ?? "0.00"}</div>

        <button
          className={styles.inc}
          onClick={() => {
            addItemToCart(itemKeys);
            calcSum(1);
          }}
        ></button>
        <span>kg</span>
      </div>
      <div className={styles.minOrder}>min order {itemKeys.minOrder} kg</div>
    </div>
  );
}

export default Counter;
