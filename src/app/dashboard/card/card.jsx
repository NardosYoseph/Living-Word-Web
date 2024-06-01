import React from 'react';
import styles from "./card.module.css"
const Card = ({ title, value, percentage }) => {
  
  console.log(title)
  return (
    <div className='shadow-md rounded-lg bg-white p-4 flex flex-col items-start justify-center h-30 w-80'>
      <h2 className="text-xl font-bold mb-2">{title} </h2>
      <div>
      <p className="text-gray-700">Total: {value}</p>
      <p className="text-gray-700">Percentage: {percentage}%</p>
    </div>
    </div>
  );
};

export default Card;