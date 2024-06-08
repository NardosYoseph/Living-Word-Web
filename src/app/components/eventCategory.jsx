import React from "react";

const eventCategory = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-black";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer w-30`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default eventCategory;
