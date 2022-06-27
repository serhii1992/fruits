import Counter from "../Counter";
import styles from "./FruitItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { calcTotalItem, calcTotalPriceAndKgItems } from "../../Redux/calcTotalSlice";
import InfoBlock from "./InfoBlock";
import ButtonsBlock from "./ButtonsBlock";

function FruitItem({ minOrder, srcImg, name, price, sale }) {
  const dispatch = useDispatch();

  let totalItem = useSelector((state) => state.calcTotalReducer.totalItem);
  let totalObj = totalItem.find((el) => el.name === name);

  const calcSumm = (coeff) => {
    let totalKg = minOrder * coeff;
    dispatch(calcTotalItem({ name, totalKg, price, totalPrice: 0 }));
    dispatch(calcTotalPriceAndKgItems());
  };

  return (
    <div className={styles.wrapper}>
      {sale && <div className={styles.saleBlock}>sale - 50% discount for every 3 kg </div>}
      <InfoBlock srcImg={srcImg} price={price} name={name} />
      <div className={styles.couterBlock}>
        <Counter
          totalObj={totalObj}
          calcSumm={calcSumm}
          minOrder={minOrder}
          srcImg={srcImg}
          name={name}
          price={price}
        />
        <div className={styles.totalBlock}>
          <p className={styles.totalBlockText}>total price</p>
          <p className={styles.totalBlockPrice}>{totalObj?.totalPrice?.toFixed(2) ?? 0} $</p>
        </div>
      </div>
      <ButtonsBlock />
    </div>
  );
}

export default FruitItem;
