import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-8 items-center ">
      {links.map((link, index) => (
        <li key={index}>
          {/* Check if an onClick handler is provided */}
          {link.onClick ? (
            <button onClick={link.onClick} className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-yellow font-roboto">
              {link.title}
            </button>
          ) : (
            <NavLink href={link.path} title={link.title} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
