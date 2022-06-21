import FruitItem from "../Components/FruitItem";

function Main({ fruits }) {
  console.log(fruits);
  return (
    <div className="main container">
      {fruits.map((el) => (
        <FruitItem key = {el.id} name={el.name} sale={el.sale} category={el.category} price={el.price} srcImg={el.srcImg} />
      ))}
    </div>
  );
}

export default Main;
