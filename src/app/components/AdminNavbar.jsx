"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import AdminNavLink from "./adminNavLink";


  const AdminNavbar = () => {
    
const navLinks = [
    {
      title: "HomePage",
      path: "/",
    },
    {
        title: "Users",
        path: "/",
      },
      {
        title: "Add Event",
        path: "/pages/event/add",
      },
  ];
    const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
        const storedUsername = localStorage.getItem("userFirstname");
        setUsername(storedUsername);
      }
    }, []);
    return(
<nav className="fixed mx-auto top-0 left-0 right-0 z-20 bg-white bg-opacity-100 p-0">
<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {/* Logo or Title */}
        </Link>
 
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-9 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                 <AdminNavLink href={link.path} title={link.title} />
              </li>
              
            ))}
                 <li></li>  <li></li>  <li></li>  <li></li>  <li></li>  <li></li>
         {!isLoggedIn ? (
              <li>
                <AdminNavLink href="/pages/users/login" title="Login" />
              </li>
            ) : (
              <li>
                <span className="text-black sm:text-xl">Welcome, {username}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
     
      
</nav>
    );
  }
  export default AdminNavbar;