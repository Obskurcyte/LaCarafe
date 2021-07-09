import React from 'react';
import styles from '../styles/Button.module.css';

const Button = (props) => {
  return (
    <div>
      <button className={styles.buttonContainer} id={props.id} onClick={props.onClick}>{props.title}</button>
    </div>
  );
};

export default Button;
