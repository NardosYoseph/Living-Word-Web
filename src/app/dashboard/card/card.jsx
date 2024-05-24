import React from 'react';
import styles from "./card.module.css"
const Card = ({ title, value, percentage }) => {
  
  console.log(title)
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>Total {value}</p>
      <p>Percentage {percentage}%</p>
    </div>
  );
};

export default Card;