import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods,  setSelectedCategory} from "../../Redux/goodsSlice";
import style from "./Catalog.module.css";

function Catalog() {
  const dispatch = useDispatch();

  const [visibleModal, setVisibleModal] = useState(false);
  
  const {category, selectedCategory} = useSelector( state => state.goodsReducer)

  useEffect(() => {
    dispatch(fetchGoods(selectedCategory))
  }, [selectedCategory]);

  const changeSelectedCategory = (category)=>{
    dispatch(setSelectedCategory(category))
  }

  return (
    <div
      className={style.catalogWrapper}
      onClick={() => {
        setVisibleModal(!visibleModal);
      }}
      onMouseEnter={() => {
        setVisibleModal(true);
      }}
      onMouseLeave={() => {
        setVisibleModal(false);
      }}
    >
      <span className={`${style.catalog} ${visibleModal && style.visible}`}> Catalog</span>
      <div className={`${style.modal} ${visibleModal && style.visible}`}>
        {category.map((el) => (
          <span
            className={el === selectedCategory ? style.active : ''}
            onClick={() => {
              changeSelectedCategory(el);
            }}
            key={el}
          >
            {el.toLocaleUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
