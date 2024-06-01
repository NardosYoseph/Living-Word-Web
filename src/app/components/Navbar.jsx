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
    path: "#Programmes",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      setIsLoggedIn(true);
      const storedUsername = localStorage.getItem("userFirstname");
      setUsername(storedUsername);
      if(role==="ADMIN"){
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 shadow-xl ${navbarOpen ? 'bg-white' : 'bg-white'}`}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-1xl md:text-5xl text-black font-semibold">
          Living Word
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-[#AD88C6] hover:border-black"
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
          <ul className="flex flex-col md:flex-row md:space-x-9 mt-4 md:mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))} <li></li><li></li><li></li><li></li><li></li><li></li><li></li>
           {!isLoggedIn ? (
              <li>
                <NavLink href="/pages/users/login" title="Login" />
              </li>
            ) : (
              <>
                <li>
                  <span className="text-black sm:text-xl">Welcome, {username}</span>
                </li>
                {isLoggedIn && isAdmin && (  // Check both login and role
                  <li>
                    <NavLink href="/pages/admin" title="Admin" />
                  </li>
                )}
              </>
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
            
            {
              title:isLoggedIn && isAdmin? "Admin":"",
              path:isLoggedIn && isAdmin? "/pages/admin":"",
            },
          ]}
        />
      )}
    </nav>
  );
};

export default Navbar;
