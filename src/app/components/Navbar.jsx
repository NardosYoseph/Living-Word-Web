"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About Us",
    path: "#about",
  },
  {
    title: "Programmes",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const storedUsername = localStorage.getItem("userFirstname");
      setUsername(storedUsername);
    }
  }, []);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#EEEEEE] bg-opacity-100 ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-black font-semibold"
        >
          {/* Logo or Title */}
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-[#AD88C6] hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-[#AD88C6] hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-9 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            {!isLoggedIn ? (
              <li>
                <NavLink href="/pages/users/login" title="Login" />
              </li>
            ) : (
              <li>
                <span className="text-black">Welcome, {username}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <MenuOverlay
          links={[
            ...navLinks,
            {
              title: !isLoggedIn ? "Login" : `Welcome, ${username}`,
              path: !isLoggedIn ? "/pages/users/login" : "#",
            },
          ]}
        />
      )}
    </nav>
  );
};

export default Navbar;
