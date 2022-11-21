export default function mutateProductList(discountValue = 0, productList) {
  const filteredList = productList.filter((el) => el.price > discountValue);
  return filteredList.map((el) => {
    return { ...el, price: el.price - discountValue };
  });
}
