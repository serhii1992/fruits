import Counter from "../Counter";
import styles from "./Item.module.css";
import InfoBlock from "./InfoBlock";
import { useCalcItem } from "../../hooks/useCalcItem";

function Item({ minOrder, srcImg, name, price, sale }) {
  const [totalObj, calcSum] = useCalcItem({ name, price, sale, minOrder });

  return (
    <div className={styles.wrapper}>
      {sale && (
        <div className={styles.saleBlock}>
          sale - {100 - sale.discountCoeff * 100}% discount for every {sale.everyKg} kg{" "}
        </div>
      )}
      <InfoBlock srcImg={srcImg} price={price} name={name} />
      <div className={styles.couterBlock}>
        <Counter
          totalObj={totalObj}
          calcSum={calcSum}
          minOrder={minOrder}
          name={name}
          price={price}
          sale={sale}
          srcImg={srcImg}
        />
        <div className={styles.totalBlock}>
          <p className={styles.totalBlockText}>
            total
            <br />
            price
          </p>
          <p className={styles.totalBlockPrice}>{totalObj?.totalPrice?.toFixed(1) ?? "0.0"} $</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
