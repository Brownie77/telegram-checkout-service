import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Message from '../../components/Message';
import styles from './PromoBlock.module.css';

function PromoBlock({ isError, handleClick }) {
  const [promo, setPromo] = useState('');
  const handlePromo = (value) => {
    setPromo(value);
  };

  return (
    <div className={isError ? styles.wrapperWithError : styles.wrapper}>
      <div>
        <Input
          value={promo}
          type={'text'}
          placeholder={'Введите Промокод...'}
          onChange={handlePromo}
        />
      </div>
      {isError ? (
        <Message isError messageSize={'13px'}>
          Промокод не найден
        </Message>
      ) : (
        ''
      )}
      <Button onClick={() => handleClick(promo)}>Применить</Button>
    </div>
  );
}

export default PromoBlock;
