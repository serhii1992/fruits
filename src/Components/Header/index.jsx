import style from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import cart from "../../assets/img/cart.png";
import MyInput from "../MyInput";
import Catalog from "../Catalog";

function Header() {
  return (
    <div className={style.wrapper}>
      <div className={[style.header, "container"].join(" ")}>
        <div className={style.logo}>
          <img className={style.logoImg} src={logo} alt="logo" />
          <span>Fruits time</span>
        </div>
        <Catalog/>
        <MyInput/>
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
      </div>
    </div>
  );
}

export default Header;
