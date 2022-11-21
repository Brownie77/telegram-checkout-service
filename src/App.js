import CardList from './components/CardList';
import PageTitle from './components/PageTitle/PageTitle';
import PromoBlock from './containers/PromoBlock';
import Message from './components/Message';
import './App.css';
import { useState, useEffect } from 'react';
import promos from './utils/constants/promoCodes';
import products from './utils/constants/productData';
import { mutateProductList, getDiscount } from './helpers/promocodes/index';

function App() {
  const [productsList, setProducts] = useState(products);
  const [discount, setDiscount] = useState(0);
  const [promoCodeError, setPromoCodeError] = useState(false);

  useEffect(() => {
    const mutatedList = mutateProductList(discount, products);
    setProducts(mutatedList);
  }, [discount]);

  function handleDiscount(discountStr) {
    const discountValue = getDiscount(discountStr, promos);
    if (!discountValue) {
      setPromoCodeError(true);
    } else {
      setPromoCodeError(false);
      setDiscount(discountValue);
    }
  }

  return (
    <div className="App">
      <PageTitle>Каталог товаров</PageTitle>
      {discount ? (
        <div className="success-message-wrapper">
          <Message isSuccess messageSize={'16px'}>
            Промокод успешно активирован
          </Message>
        </div>
      ) : (
        <PromoBlock isError={promoCodeError} handleClick={handleDiscount} />
      )}
      <CardList products={productsList} />
    </div>
  );
}

export default App;
