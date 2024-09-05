import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaYoutube, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 relative justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/youthh.png" // Your background image path
          alt="Footer Background"
          className="object-cover w-full h-full"
        />
        {/* Overlay Shadow */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 py-20 px-4 xl:px-16 flex flex-col md:flex-row justify-between items-start text-white lg:p-10">
        {/* Contact Us */}
        <div className="flex flex-col items-center md:w-1/4 max-w-sm mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-[#DC5F00]">Contact Us</h3>
          {/* Branches Information */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <p>Around Ejere Woreda Education beruae office or behind of Ejere Fenet Acedamy, Ejere, Ethiopia</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <p>+1234567890</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <p>EjereChangare@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:w-1/4 mt-10 md:mt-0 sm:mt-10">
          <h3 className="text-lg font-semibold mb-4 text-[#DC5F00]">Follow us on social media</h3>
          <div className="flex flex-col items-start">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 mb-2">
              <a href="https://www.facebook.com/profile.php?id=61552465917880" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaFacebook />
                <p>Facebook</p>
              </a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <a href="https://www.youtube.com/channel/UCOxjLDqwI0EhMR-RoHrevgQ" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaYoutube />
                <p>Youtube</p>
              </a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <a href="https://t.me/Ejerefullgospelchurch" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaTelegram />
                <p>Telegram</p>
              </a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaTwitter />
                <p>Twitter</p>
              </a>
            </div>
          </div>
        </div>

        {/* Links List */}
        <div className="flex flex-col items-center md:w-1/4 mt-0 md:mt-0">
          <div className="flex flex-col space-y-2">
            <Link href="#about">
              <p className="text-white hover:text-[#DC5F00]">About Us</p>
            </Link>
            <Link href="#Programmes">
              <p className="text-white hover:text-[#DC5F00]">Programmes</p>
            </Link>
            <Link href="#recentEvents">
              <p className="text-white hover:text-[#DC5F00]">Recent Events</p>
            </Link>
            <Link href="/pages/users/login">
              <p className="text-white hover:text-[#DC5F00]">Login</p>
            </Link>
          </div>
        </div>

        {/* Developed By */}
        <div className="flex flex-col items-center md:w-1/4 mt-10 md:mt-0">
          <h3 className="text-lg font-semibold mb-4 text-[#DC5F00]">Developed by</h3>
          <img src="images/white.png" alt="Cassio Logo" width="250" height="100" className="mb-4" />
          <p className="text-white">@2024 Living Word.</p>
          <p className="text-white">All rights reserved.</p>
          <p className="text-slate-600">
            <a href="https://cassiopeia.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Cassiopeia Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
