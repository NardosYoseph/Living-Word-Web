import React from "react";

const eventCategory = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#F57D1F] rounded-full border-2 border-black "
    : "text-black";
  return (
    <button
      className={`${buttonStyles} px-4 py-2 font-16 cursor-pointer w-30 hover:text-[#F57D1F] mt-10`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default eventCategory;
