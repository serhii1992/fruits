import styles from "./CartItem.module.css";
import Counter from "../Counter";
import { useDispatch } from "react-redux";
import { removeItemIncart } from "../../redux/cartSlice";
import { calcTotalPriceAndKgItems, removeFromTotalItem } from "../../redux/calcTotalSlice";
import { useCalcItem } from "../../hooks/useCalcItem";

function CartItem({ name, price, srcImg, minOrder, sale }) {
  const dispatch = useDispatch();
  const [totalObj, calcSum] = useCalcItem({ name, price, srcImg, sale });

  if (!totalObj.totalKg) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlock}>
        <img src={srcImg} />
        <span>{name}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.counter}>
          <Counter minOrder={minOrder} totalObj={totalObj} calcSum={calcSum} />
          <div className={styles.price}>x {totalObj?.price.toFixed(1) || "0"} $/kg</div>
        </div>
        <div className={styles.total}>
          <div> = {totalObj?.totalPrice?.toFixed(1) || "0.0"} $</div>
          <div
            onClick={() => {
              dispatch(removeItemIncart(name));
              dispatch(removeFromTotalItem(name));
              dispatch(calcTotalPriceAndKgItems());
            }}
            className={styles.close}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
