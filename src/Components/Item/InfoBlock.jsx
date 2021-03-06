import styles from "./Item.module.css";

function InfoBlock({srcImg, price, name}) {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.imgBlok}>
        <img src={srcImg} />
      </div>

      <div className={styles.contentBlock}>
        <p className={styles.name}>{name}</p>
        <p className={styles.pricePerKg}>price per kg: <span>{price}  $</span></p>
      </div>
    </div>
  );
}

export default InfoBlock;
