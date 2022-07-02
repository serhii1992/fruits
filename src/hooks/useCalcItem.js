import { useSelector, useDispatch } from "react-redux";
import { calcTotalItem, calcTotalPriceAndKgItems } from "../redux/calcTotalSlice";

export const useCalcItem = (obj) => {
  const dispatch = useDispatch();

  const totalItem = useSelector((state) => state.calcTotalReducer.totalItem);
  const totalObj = totalItem.find((el) => el.name === obj.name);

  const calcSum = (coeff) => {
    dispatch(calcTotalItem({ ...obj, coeff }));
    dispatch(calcTotalPriceAndKgItems());
  };

  return [totalObj, calcSum];
};
