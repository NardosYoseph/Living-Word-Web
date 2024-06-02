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
  const [navbarOpen, setNavbarOpen] = useState(false);


    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
        const storedUsername = localStorage.getItem("userFirstname");
        setUsername(storedUsername);
      }
    }, []);
    
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Redirect to the login page or any other desired page
    window.location.href = "/pages";
  };
    return(
<nav className={`fixed top-0 left-0 right-0 z-20 shadow-xl ${navbarOpen ? 'bg-white' : 'bg-white'}`}>
<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
<Link href='/' className="flex items-center space-x-2 text-1xl md:text-3xl text-black font-semibold">
      <img src='/images/cross.jpeg' alt="Living Word Logo" className="h-10 md:h-12" />
          <span>Living Word</span>
        </Link>
        <div className="mobile-menu block md:hidden ml-4 md:ml-0">
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
         <ul className="flex p-4 md:p-0 md:flex-row md:space-x-9 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                 <AdminNavLink href={link.path} title={link.title} />
              </li>
              
            ))}
                
                 <ul>
                  <span className="text-black sm:text-xl">Welcome, {username}</span>
                </ul>
                {isLoggedIn && (  
                       <li>
                  <button onClick={handleLogout} className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-yellow font-roboto">
                    Logout
                  </button>
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
              title:`Welcome, ${username}`,
              path: "#",
            },
          ]}
        />
      )}
    </nav>



    );
  }
  export default AdminNavbar;