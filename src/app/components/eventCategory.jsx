import React from "react";

const EventCategory = ({ name, onClick, isSelected, bgColor }) => {
  const buttonStyles = isSelected
    ? "text-white border-black"
    : "text-white hover:border-black";
    
  const dynamicStyles = {
    backgroundColor: bgColor,
  };

  return (
    <button
      className={`${buttonStyles} border-2 px-6 py-3 text-xl cursor-pointer w-30 m-0`}
      onClick={() => onClick(name)}
      style={dynamicStyles}
    >
      {name}
    </button>
  );
};

export default EventCategory;
