import React from 'react';
import styles from './Input.module.css';

function Input({ type, placeholder, onChange, value }) {
  return (
    <input
      className={styles.input}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
