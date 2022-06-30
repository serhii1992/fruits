import style from "./CartButton.module.css";
import cart from "../../assets/img/cart.png";
import {Link } from "react-router-dom";
import { useSelector} from "react-redux";

function CartButton() {
  const {totalKgItems, totalPriceItems} = useSelector(state=> state.calcTotalReducer)

  return (
    <Link to ='/cart'>
      <div className={style.cartButton}>
        <div className={style.count}>
          <div>{totalKgItems.toFixed(2)}</div>
          <img className={style.cartIcon} src={cart} alt="cart" />
        </div>
        <div className={style.totalCount}>
          <div>Cart</div>
          <div>{totalPriceItems.toFixed(2) || "0.00"} $</div>
        </div>
      </div>
    </Link>
  );
}

export default CartButton;
