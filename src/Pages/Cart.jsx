import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

function Cart() {
  const { goods } = useSelector((state) => state.cartReducer);
  const { totalPriceItems } = useSelector((state) => state.calcTotalReducer);

  return (
    <div className="cartWrapper container">
      {!goods.length  ?
        <div className="emptyCart">You have not added items to your shopping cart. Please add!!!!</div>
      
      :goods.map((el) => (
        <CartItem
          key={el.name}
          name={el.name}
          price={el.price}
          srcImg={el.srcImg}
          minOrder={el.minOrder}
        />
      ))}
      {goods.length? <div className="totalCart"> Total in CART: {totalPriceItems}$</div> : ""}
    </div>
  );
}

export default Cart;
