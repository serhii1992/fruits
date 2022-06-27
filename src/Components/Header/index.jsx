import style from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import MyInput from "../MyInput";
import Catalog from "../Catalog";
import CartButton from "../CartButton";
import {Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.wrapper}>
      <Link to='/'>
        <div className={[style.header, "container"].join(" ")}>
          <div className={style.logo}>
            <img className={style.logoImg} src={logo} alt="logo" />
            <span>Fruits time</span>
          </div>
          <Catalog />
          <MyInput />
          <CartButton />
        </div>
      </Link>
    </div>
  );
}

export default Header;
