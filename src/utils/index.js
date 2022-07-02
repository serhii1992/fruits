export const calcForSale = (kg, price, everyKg, discountCoeff) => {
  const discountPrice = price * discountCoeff;
  const intNum = kg - (kg % everyKg);
  const discountKilograms = intNum / everyKg;

  return kg < everyKg || !discountCoeff
    ? kg * price
    : discountKilograms * discountPrice + (kg - discountKilograms) * price;
};

export const sum = (arr, param) => {
  return arr.reduce((acc, el) => acc + el[param], 0);
};
