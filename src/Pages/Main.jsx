import { useSelector, useDispatch } from "react-redux";
import FruitItem from "../Components/FruitItem";
import Loader from "../Components/Loader";

function Main() {
  const { goods, status, selectedCategory } = useSelector((state) => state.goodsReducer);

  return (
    <div className="container main">
      <h1 className="mainTitle" >{selectedCategory === "all" ? selectedCategory + ' goods' :  selectedCategory}</h1>
      <div className="content">
        {status === "loading" && <Loader />}
        {goods.map((el) => (
          <FruitItem
            key={el.id}
            name={el.name}
            price={el.price}
            srcImg={el.srcImg}
            minOrder={el.minOrder}
            sale={el.sale}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
