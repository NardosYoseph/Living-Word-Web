"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const AboutSection = () => {
  

  return (
    <section className="relative text-black" id="about">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lwpas2.jpg"
          alt="about"
          fill
          className="object-cover filter blur-14px"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
  
      
      {/* Content */}
      <div className="relative z-10 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg text-white">
            Our journey began with a vision to build a sanctuary where individuals from all walks of life 
            could come together to worship, grow, and serve. Our church family is committed to embodying the
            teachings of Jesus Christ and spreading His message of hope and compassion to our congregation and
            beyond. Whether you're a longtime member or a first-time visitor, we invite you to join us as we
            strive to live out our faith through meaningful worship, inspiring fellowship, and impactful outreach
            initiatives. Together, we seek to create a nurturing environment where everyone feels valued, supported,
            and empowered to live a life rooted in faith and service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
