import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

function Cart() {
  let totalItem = useSelector((state) => state.calcTotalReducer.totalItem);
  const goods = useSelector((state) => state.cartReducer.goods);

  const { totalPriceItems } = useSelector((state) => state.calcTotalReducer);
  
  const isCartEmpty = totalItem.every((el) => !el.totalKg);

  return (
    <div className="cartWrapper container">
      {isCartEmpty ? (
        <div className="emptyCart">
          You have not added items to your shopping cart. Please add!!!!
        </div>
      ) : (
        <>
          {goods.map((el) => (
            <CartItem
              key={el.name}
              name={el.name}
              price={el.price}
              srcImg={el.srcImg}
              minOrder={el.minOrder}
              sale={el.sale}
            />
          ))}

          <div className="totalCart"> Total in CART: {totalPriceItems}$</div>
        </>
      )}
    </div>
  );
}

export default Cart;
