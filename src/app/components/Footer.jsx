
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
      <div className="relative z-10 py-20 px-4 xl:px-16 flex flex-col md:flex-row justify-start items-start text-white lg:p-10">
        {/* Contact Us */}
        <div className="flex flex-col items-center md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 text-[#DC5F00]">Contact Us</h3>
          {/* Branches Information */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <p>Yohannes Building at distance of 100 meter,Dire Dawa,Ethiopia</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <p>CMC near Yetebaberut Gas station,Addis Ababa,Ethiopia</p>
            </div> <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <p>123 Main Street, Djibouti, Ethiopia</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <p>+1234567890</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <p>livingword@gmail.com</p>
            </div>
            {/* Add more branches as needed */}
          </div>
        </div>
   
        {/* Social Links */}
        
        <div className="flex flex-col items-center md:w-1/3 mt-10 md:mt-0 sm:mt-10">
    <h3 className="text-lg font-semibold mb-4 text-[#DC5F00]">Follow us on social media</h3>
    <div className="flex flex-col items-start">
      {/* Social Media Icons */}
      <div className="flex items-center space-x-2 mb-2">
        <a href="https://www.facebook.com/livingwordchurch2?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <FaFacebook />
          <p>Facebook</p>
        </a>
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <FaYoutube />
          <p>Youtube</p>
        </a>
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <FaInstagram />
          <p>Instagram</p>
        </a>
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
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
        {/* <div className="flex flex-col items-center md:w-1/3 mt-10 md:mt-0 sm:mt-10 justify-center items-center">
 
 <div className="flex flex-col mt-0 ">
   <Link href="#about" className="text-white hover:text-[#DC5F00]">AboutUs</Link>
<Link href="#Programmes" className="text-white hover:text-[#DC5F00]">Programmes</Link>
<Link href="#recentEvents" className="text-white hover:text-[#DC5F00]">Recent Events</Link>
<Link href="/pages/login" className="text-white hover:text-[#DC5F00]">Login</Link>
</div>
</div> */}
        {/* Developed by */}
        <div className="flex flex-col items-center md:w-1/3 mt-10 md:mt-0">
          <h3 className="text-lg font-semibold mb-4 text-[#DC5F00]">Developed by</h3>
          <img src="images/white.png" alt="Cassio Logo" width="300" height="100" className="mb-0" />
          {/* <div className="h-5 mt-0 p-0"></div> */}
          <p className="text-white">@2024 Living Word.</p>
         <p className="text-white">All rights reserved.</p>
        <p className="text-slate-600">
        <a href="https://cassiopeia.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Cassiopeia Technologies</a></p>
       </div>
        </div>
      
    </footer>
  );
};

export default FooterSection;
