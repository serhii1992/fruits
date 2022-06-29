import { useSelector, useDispatch } from "react-redux";
import { calcTotalItem, calcTotalPriceAndKgItems } from "../redux/calcTotalSlice";

export const useCalcItem = (obj) => {
  const dispatch = useDispatch();

  let totalItem = useSelector((state) => state.calcTotalReducer.totalItem);
  let totalObj = totalItem.find((el) => el.name === obj.name);

  const calcSum = (coeff) => {
    dispatch(calcTotalItem({ ...obj, coeff }));
    dispatch(calcTotalPriceAndKgItems());
  };

  return [totalObj, calcSum];
};
