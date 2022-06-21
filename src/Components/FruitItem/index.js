import Counter from "../Counter";
import styles from "./FruitItem.module.css";

function FruitItem(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlok}>
        <img src={props.srcImg} />
      </div>
      <div className={styles.contentBlock}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.pricePerKg}>price per kg</p>
        <p className={styles.price}>{props.price} $</p>
        <div className={styles.couterBlock}>
          <Counter />
          <button className={styles.btn}>add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default FruitItem;
