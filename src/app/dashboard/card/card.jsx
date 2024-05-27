import React from 'react';
import styles from "./card.module.css"
const Card = ({ title, value, percentage }) => {
  
  console.log(title)
  return (
    <div className={styles.card}>
      <h2>{title} </h2>
      <div>
      <p>Total: {value}</p>
      <p>Percentage: {percentage}%</p>
    </div>
    </div>
  );
};

export default Card;