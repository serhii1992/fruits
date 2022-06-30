import { useSelector } from "react-redux";
import Catalog from "../Components/Catalog";
import FruitItem from "../Components/Item";
import Loader from "../Components/Loader";

function Main() {
  const { goods, status, error, selectedCategory } = useSelector((state) => state.goodsReducer);

  return (
    <div className="container main">
      <div className="mainHeader">
        <div className="mainTitleBloc">
          <h2>{selectedCategory === "all" ? selectedCategory + " goods" : selectedCategory}</h2>
        </div>
        <Catalog />
      </div>
      <div className="content">
        {status === "loading" && <Loader />}
        {error && <div className="error">An error has occurred: {error}</div>}
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
