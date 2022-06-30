export const calcForSale = (kg, price, discountKg, everyKg, discountCoeff) => {
  const discountPrice = price * discountCoeff;
debugger
  if (kg < everyKg || !everyKg) {
    return kg * price;
  } else {
    const restNum = kg - everyKg;
    const intNum = kg - restNum;
    return (
      ((intNum - discountKg) * price) + (discountKg * discountPrice) +calcForSale(restNum, price, discountKg, everyKg, discountCoeff)
    );
  }
};

export const sum = (arr, param) => {
  return arr.reduce((acc, el) => acc + el[param], 0);
};
