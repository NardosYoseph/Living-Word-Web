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
    return(
<nav className={`fixed top-0 left-0 right-0 z-20 ${navbarOpen ? 'bg-white' : 'bg-white'}`}>
<div className="flex container lg:py-4 flex-wrap items-center justify-center mx-auto px-4 py-2">
        <Link href={"/"}
          className="text-2xl md:text-5xl text-black font-semibold"
        >
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
         <ul className="flex p-4 md:p-0 md:flex-row md:space-x-9 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                 <AdminNavLink href={link.path} title={link.title} />
              </li>
              
            ))}
                 <li></li>  <li></li>  <li></li>  <li></li>  <li></li>  <li></li>
          </ul>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul>
                  <span className="text-black sm:text-xl">Welcome, {username}</span>
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


















//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-9 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                  <AdminNavLink href={link.path} title={link.title} />
//               </li>
              
//             ))}
//                  <li></li>  <li></li>  <li></li>  <li></li>  <li></li>  <li></li>
//          {!isLoggedIn ? (
//               <li>
//                 <AdminNavLink href="/pages/users/login" title="Login" />
//               </li>
//             ) : (
//               <li>
//                 <span className="text-black sm:text-xl">Welcome, {username}</span>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
     
      
// </nav>
    );
  }
  export default AdminNavbar;