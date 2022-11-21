import React from 'react';
import styles from './Card.module.css';
import pay from '../../helpers/payment/payselection';
function Card({ id, price, title, description, image }) {
  return (
    <div className={styles.productsSection}>
      <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.cardImage}
            src={require(`../../assets/images/products/${image}.png`)}
            alt="product"
          />
        </div>
        <div className={styles.productInfoWrapper}>
          <h3 className={styles.productTitle}>{title}</h3>
        </div>
        <div className={styles.productPaymentArea}>
          <p className={styles.productPrice}>{price} руб.</p>
          <button
            onClick={() => {
              pay(id, price, title);
            }}
            className={styles.productCheckoutButton}
          >
            Оплатить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
