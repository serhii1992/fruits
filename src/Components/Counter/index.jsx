import styles from "./Counter.module.css";

function Counter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.counterBlock}>
        <div className={styles.inc}></div>
        <div className={styles.count}>16</div>
        <div className={styles.dec}></div>
        <span>kg</span>
      </div>
      <div className={styles.totalBlock}>
        <p className={styles.totalBlockText}>total price</p>
        <p className={styles.totalBlockPrice}>350 $</p>
      </div>
    </div>
  );
}

export default Counter;
