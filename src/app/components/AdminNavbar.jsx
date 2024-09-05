"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
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
      path: "/pages/users",
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
    localStorage.clear();
    window.location.href = "/pages";
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 shadow-xl ${navbarOpen ? 'bg-white' : 'bg-white'}`}>
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-1">
        <Link href='/' className="flex items-center space-x-2 md:text-3xl text-black font-semibold">
          {/* <img src='/images/cross.jpeg' alt="Living Word Logo" className="h-10 md:h-12" /> */}
          <span>Ejere Changare</span>
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
            <li className="relative group">
              <button className="flex items-center space-x-2 text-black">
                Events
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              <ul className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:mt-0 transition-all duration-300">
                <li>
                  <Link href="/pages/event/view/upcoming_event" className="block px-4 py-1 text-black hover:bg-gray-100">
                  Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link href="/pages/event/view/recent_event" className="block px-4 py-1 text-black hover:bg-gray-100">
                    Recent Events
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hidden md:block">Welcome, {username}</li>
            {isLoggedIn && (
              <li>
                <button onClick={handleLogout} className="block py-1 pl-3 pr-4 text-black rounded md:p-0 hover:text-yellow font-roboto">
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
              title: 'Upcomming Events',
              path: "/pages/event/view/upcoming_event",
            }, {
              title: 'Recent Events',
              path: "/pages/event/view/recent_event",
            },
            {
              title: isLoggedIn ? "Logout" : "",
              onClick: handleLogout,
            },
          
          ]}
        />
      )}
    </nav>
  );
};

export default AdminNavbar;
