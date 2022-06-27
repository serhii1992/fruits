import styles from "./FruitItem.module.css";
import { Link } from "react-router-dom";

function ButtonsBlock() {
  return (
    <div>
        <Link to="/cart">
          <button className={styles.buttonToCart}>go to cart</button>
        </Link>
    </div>
  );
}

export default ButtonsBlock;
