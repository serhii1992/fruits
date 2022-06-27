import { addToCart } from "../../Redux/cartSlice";
import {useDispatch } from "react-redux";
import styles from "./Counter.module.css";

function Counter({ totalObj, calcSumm, ...itemKeys }) {

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
            calcSumm(-1);
          }}
        ></button>

        <div className={styles.count}> {totalObj?.totalKg.toFixed(2) ?? "0.00"}</div>

        <button
          className={styles.inc}
          onClick={() => {
            addItemToCart(itemKeys);
            calcSumm(1);
          }}
        ></button>
        <span>kg</span>
      </div>
      <div className={styles.minOrder}>min order {itemKeys.minOrder} kg</div>
    </div>
  );
}

export default Counter;
