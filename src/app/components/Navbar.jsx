import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
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
    title: "Recent Events",
    path: "#recentEvents",
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
      if (role === "ADMIN") {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Redirect to the login page or any other desired page
    window.location.href = "/pages";
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-xl ${navbarOpen ? 'bg-white' : 'bg-white'}`}>
      <div className="flex left-0 right-0 container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-1">
        <Link href='/' className="flex items-start space-x-2 text-xl md:text-3xl text-black font-semibold font-24">
          {/* <img src='images/cross.jpeg' alt="Living Word Logo" className="h-10 md:h-10" /> */}
          <span>Living Word</span>
        </Link>
        {!navbarOpen && (
          <div className="flex space-x-4 md:hidden">
            <Link href="https://www.facebook.com/livingwordchurch2?mibextid=ZbWKwL">
              <FaFacebook className="text-black hover:text-[#AD88C6] h-5 w-5" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-black hover:text-[#AD88C6] h-5 w-5" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-black hover:text-[#AD88C6] h-5 w-5" />
            </Link>
          </div>
        )}
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
        <div className="menu hidden md:flex md:w-auto md:items-center md:space-x-4">
          <ul className="flex flex-col md:flex-row md:space-x-9 mt-4 md:mt-0">
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
              <>
                <li>
                  <span className="text-black">Welcome, {username}</span>
                </li>

                {isLoggedIn && isAdmin && (  // Check both login and role
                  <li>
                    <NavLink href="/pages/admin" title="Admin page" />
                  </li>
                )}
                {isLoggedIn && (
                  <li>
                    <button onClick={handleLogout} className="block py-2 pl-3 pr-4 text-black rounded md:p-0 hover:text-yellow font-roboto">
                      Logout
                    </button>
                  </li>
                )}
              </>
            )}
          </ul>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/livingwordchurch2?mibextid=ZbWKwL">
              <FaFacebook className="text-black hover:text-[#AD88C6] h-5 w-5" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-black hover:text-[#AD88C6] h-5 w-5" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-black hover:text-[#AD88C6] h-5 w-5" />
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
              onClick: handleLogout // Change the path to the logout endpoint or page
            },

          ]}
        />
      )}
    </nav>
  );
};

export default Navbar;
