"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import HeroNavLink from "./heroNavLink";
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";

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
    title: "Recent Events",
    path: "#recentEvents",
  },
];

const HeroNavbar = () => {
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
      if (role === "ADMIN") {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/pages";
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navbarOpen ? 'bg-white' : 'bg-bg-transparent'}`}>
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-1">
        <Link
          href="/"
          className="flex items-start space-x-2 text-xl md:text-3xl text-white font-semibold"
        >
          <img src='images/logo1.jpg' alt="Living Word Logo" className="h-10 md:h-10" />
          <span>Ejere Changare</span>
        </Link>
        {!navbarOpen && (
          <div className="flex space-x-4 md:hidden">
            <Link href="https://www.facebook.com/profile.php?id=61552465917880">
              <FaFacebook className="text-white hover:text-[#AD88C6] h-5 w-5" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-white hover:text-[#AD88C6] h-5 w-5" />
            </Link>
            <Link href="https://t.me/Ejerefullgospelchurch">
              <FaTelegram className="text-white hover:text-[#AD88C6] h-5 w-5" />
            </Link>
          </div>
        )}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-gray-200 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-black hover:border-black"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex md:items-center md:space-x-9 mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-9">
            {navLinks.map((link, index) => (
              <li key={index}>
                <HeroNavLink href={link.path} title={link.title} />
              </li>
            ))}
            {!isLoggedIn ? (
              <li>
                <HeroNavLink href="/pages/users/login" title="Login" />
              </li>
            ) : (
              <>
                <li>
                  <span className="text-white">Welcome, {username}</span>
                </li>
                {isLoggedIn && isAdmin && (
                  <li>
                    <HeroNavLink href="/pages/admin" title="Admin page" />
                  </li>
                )}
                {isLoggedIn && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-gray-200 font-roboto"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </>
            )}
          </ul>
          <div className="flex space-x-4 ml-4">
            <Link href="https://www.facebook.com/profile.php?id=61552465917880">
              <FaFacebook className="text-white hover:text-[#AD88C6] h-5 w-5" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-white hover:text-[#AD88C6] h-5 w-5" />
            </Link>
            <Link href="https://t.me/Ejerefullgospelchurch">
              <FaTelegram className="text-white hover:text-[#AD88C6] h-5 w-5" />
            </Link>
          </div>
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
              title: isLoggedIn && isAdmin ? "Admin page" : "",
              path: isLoggedIn && isAdmin ? "/pages/admin" : "",
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

export default HeroNavbar;
