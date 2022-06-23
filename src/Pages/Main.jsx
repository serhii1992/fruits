import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FruitItem from "../Components/FruitItem";
import { fetchGoods } from "../Redux/goodsSlice";
import Loader from "../Components/Loader";

function Main() {
  const dispatch = useDispatch();
  const { goods, status } = useSelector((state) => state.goodsReducer);
  console.log(status);

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  return (
    <div className="main container">

      {status === 'loading' && <Loader/>}
      {goods.map((el) =>
          <FruitItem
            key={el.id}
            name={el.name}
            sale={el.sale}
            category={el.category}
            price={el.price}
            srcImg={el.srcImg}
          />
        
       )}
    </div>
  );
}

export default Main;
