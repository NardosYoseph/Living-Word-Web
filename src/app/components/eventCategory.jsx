import React from "react";

const eventCategory = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white rounded-full border-2 border-white "
    : "text-white";
  return (
    <button
      className={`${buttonStyles} px-4 py-2 font-16 cursor-pointer w-30 hover:text-white mt-10`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default eventCategory;
