import style from './CartButton.module.css'
import cart from "../../assets/img/cart.png";

function CartButton() {
  return (
    <div className={style.cartButton}>
      <div className={style.count}>
        <div>3</div>
        <img className={style.cartIcon} src={cart} alt="cart" />
      </div>
      <div className={style.totalCount}>
        <div>Cart</div>
        <div>0.00 $</div>
      </div>
    </div>
  );
}

export default CartButton;
