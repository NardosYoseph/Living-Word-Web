"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 w-full min-w-screen justify-center items-center" >
      
      <div className="grid grid-cols-1 sm:grid-cols-12 justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-center justify-self-center"
        >
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
         { /* eslint-disable react/no-unescaped-entities */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
             Wellcome,To{' '}
            </span>
            {/* eslint-enable react/no-unescaped-entities */}
            <br></br>
            <TypeAnimation
              sequence={[
                "Living Word",
                1000,
                "Believers",
                1000,
                "International",
                1000,
                "Church",
                1000,
               
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
          Psalm 91:4<br></br>
"He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart." </p>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} 
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* <div className="  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
 
            <Image
              src="/images/cross.jpeg"
              alt="my image"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
              width={400}
              height={400}
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
