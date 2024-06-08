import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative text-black pt-20 mt-0 overflow-hidden" id="about">
      {/* Background Container */}
      <div className="relative bg-white bg-opacity-40 py-8 px-4 xl:px-16">
        {/* Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/share.png"
            alt="about"
            className="object-cover w-full h-full"
            layout="fill" // Ensures the image covers the entire section
          />
          {/* Gradient Shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-500"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-row md:flex-row gap-10 md:gap-16 items-center">
          {/* Empty div to push text to the right */}
          {/* <div className="hidden md:block md:w-1/2 ml-80"></div> */}
          {/* Text */}
          <div className="flex flex-row justify-start items-start">
                      <div className="w-full md:w-1/2 text-white ml-auto">
            <h2 className="text-4xl font-bold text-[#DC5F00] mb-4">About Us</h2>
            <p className="text-base lg:text-lg">
              Our journey began with a vision to build a sanctuary where individuals from all walks of life 
              could come together to worship, grow, and serve. Our church family is committed to embodying the
              teachings of Jesus Christ and spreading His message of hope and compassion to our congregation and
              beyond. Whether you're a longtime member or a first-time visitor, we invite you to join us as we
              strive to live out our faith through meaningful worship, inspiring fellowship, and impactful outreach
              initiatives. Together, we seek to create a nurturing environment where everyone feels valued, supported,
              and empowered to live a life rooted in faith and service.
            </p>
          </div>
          <div className="hidden md:block md:w-1/2 ml-80"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
