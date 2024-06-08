import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative text-black pt-20 mt-0" id="about">
      {/* Background Container */}
      <div className="bg-white bg-opacity-40 py-8 px-4 xl:px-16">
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="flex-shrink-0 md:w-1/2">
            <Image
              src="/images/lwpas2.jpg"
              alt="about"
              className="object-cover w-full h-full"
              width={600}
              height={400} // Adjust the height as needed
            />
          </div>
          
          {/* Text */}
          <div className="md:w-1/2 ">
            <h2 className="text-4xl font-bold text-[#DC5F00] mb-4">About Us</h2>
            <p className="text-base lg:text-lg text-black">
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
      </div>
    </section>
  );
};

export default AboutSection;
