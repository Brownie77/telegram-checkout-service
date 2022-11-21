import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css';

function CardList({ products }) {
  return (
    <div className={styles.wrapper}>
      {products.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
}

export default CardList;
