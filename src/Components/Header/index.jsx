import style from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import MyInput from "../MyInput";
import Catalog from "../Catalog";
import CartButton from "../CartButton";

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
        <CartButton/>
      </div>
    </div>
  );
}

export default Header;
