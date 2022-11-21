export default function getDiscount(promoStr, codesArr) {
  const findedPromo = codesArr.find((el) => el.title === promoStr);
  if (findedPromo) {
    return findedPromo.discount;
  }
  return null;
}
