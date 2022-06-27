import styles from "./CartItem.module.css";
import Counter from "../Counter";
import { useSelector, useDispatch } from "react-redux";
import { removeItemIncart } from "../../Redux/cartSlice";
import {
  calcTotalItem,
  calcTotalPriceAndKgItems,
  removeFromTotalItem,
} from "../../Redux/calcTotalSlice";

function CartItem({ name, price, srcImg, minOrder }) {
  const dispatch = useDispatch();

  let totalItem = useSelector((state) => state.calcTotalReducer.totalItem);
  let totalObj = totalItem.find((el) => el.name === name);

  const calcSumm = (coeff) => {
    let totalKg = minOrder * coeff;
    dispatch(calcTotalItem({ name, totalKg, price, totalPrice: 0 }));
    dispatch(calcTotalPriceAndKgItems());
  };

  if( !totalObj?.totalKg){
    return null
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.imgBlock}>
          <img src={srcImg} />
          <span>{name}</span>
        </div>
        <div className={styles.counter}>
          <Counter minOrder={minOrder} totalObj={totalObj} calcSumm={calcSumm} />
          <div className={styles.price}>x {totalObj?.price || "0"} $/kg</div>
        </div>
        <div className={styles.total}>
          <div> = {totalObj?.totalPrice?.toFixed(2) || "0.00"} $</div>
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
