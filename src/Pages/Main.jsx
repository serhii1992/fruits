import { useSelector } from "react-redux";
import FruitItem from "../Components/FruitItem";

import Loader from "../Components/Loader";

function Main() {
  const { goods, status, selectedCategory } = useSelector((state) => state.goodsReducer);
  console.log(status);

  return (
    <div className="container main">
      <h1 className="mainTitle" >{selectedCategory === "all" ? selectedCategory + ' goods' :  selectedCategory}</h1>
      <div className="content">
        {status === "loading" && <Loader />}
        {goods.map((el) => (
          <FruitItem
            key={el.id}
            name={el.name}
            sale={el.sale}
            category={el.category}
            price={el.price}
            srcImg={el.srcImg}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
