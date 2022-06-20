import style from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/catalogMenu.png";
import cart from "../../assets/img/cart.png";

function Header() {
  return (
    <div className={style.wrapper}>
      <div className={[style.header, "container"].join(" ")}>
        <div className={style.logo}>
          <img className={style.logoImg} src={logo} alt="logo" />
          <span>Fruits time</span>
        </div>
        <div className={style.catalog}>
          <img src={menu} alt="menu" />
          <span>Catalog</span>
        </div>
        <div className={style.search}>
          <input type="text" placeholder="Search..." />

          <svg
            className={style.searchIcon}
            version="1.1"
            viewBox="0 0 129 129"
            enable-background="new 0 0 129 129"
          >
            <g>
              <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z" />
            </g>
          </svg>
          <svg
            className={style.closeIcon}
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            enable-background="new 0 0 50 50"
          >
            <path
              fill="#000"
              d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
	l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
	L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
	c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
	C8.625,39.813,8.625,40.447,9.016,40.837z"
            />
          </svg>
        </div>
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
