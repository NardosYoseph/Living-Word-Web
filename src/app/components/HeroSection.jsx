"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion,AnimatePresence  } from "framer-motion";
import Link from "next/link";
import { HeartIcon, PlayIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextImageLoaded, setNextImageLoaded] = useState(false);
  const images = [
    { src: "/images/pr.jpg", width: 1920, height: 1080 },
    { src: "/images/sundpray.jpg", width: 1920, height: 1080 },
    { src: "/images/lwvgroup.jpg", width: 1920, height: 1080 },
    { src: "/images/prayers.jpg", width: 1920, height: 1080 },
  ];
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  const handleNextImageLoad = () => {
    setNextImageLoaded(true);
  };
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full min-w-screen h-[600px] overflow-hidden justify-center items-center bg-cover pb-20 relative">
    <AnimatePresence mode='popLayout'>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="flex w-full h-full">
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black font-extrabold text-4xl sm:text-4xl lg:text-4xl bg-opacity-700 p-2 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none z-10" 
            onClick={prevImage}
          >
            ❮
          </button>
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full object-cover"
          fill
          />
          {nextImageLoaded && (
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black font-extrabold text-4xl sm:text-4xl lg:text-4xl bg-opacity-700 p-2 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none z-10" 
              onClick={nextImage}
            >
              ❯
            </button>
          )}
          <Image
            src={images[(currentIndex + 1) % images.length]}
            alt={`Slide ${currentIndex + 2}`}
            onLoad={handleNextImageLoad}
            style={{ display: "none" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
    <div className="absolute top-40 left-0 right-0 bg-black bg-opacity-50 text-white py-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Wellcome, To{' '}
            </span>
            <br />
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
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            Psalm 91:4<br />
            "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart."
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-50 text-white py-8 text-center">
      <div className="flex justify-center gap-4 mt-8">
              {/* Upcoming Events Button */}
              <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
            <HeartIcon className="h-10 w-10 inline mr-2"/>
              <Link href='#Programmes'>Upcoming Events</Link>  
              </button>
              {/* Recent Events Button */}
              <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
              <PlayIcon className="h-10 w-10 inline mr-2"/>
              <Link href='#recentEvents'>Watch Recent Events</Link>  
              </button>
     
            </div>
      </div>
  </section>
);
};

export default HeroSection;
// {/* <div className="relative z-10 flex w-full h-full justify-center items-center bg-black bg-opacity-50">
//       <div className="grid grid-cols-1 sm:grid-cols-12 justify-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-center justify-self-center"
//         >
//           <br></br>
//           <br></br>
//           <br></br> */}
//           {/* <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"> */}
//           { /* eslint-disable react/no-unescaped-entities */}
//           {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"> */}
//            {/* Wellcome,To{' '} */}
//           {/* </span> */}
//           {/* eslint-enable react/no-unescaped-entities */}
//           {/* <br></br> */}
//           {/* <TypeAnimation
//             sequence={[
//               "Living Word",
//               1000,
//               "Believers",
//               1000,
//               "International",
//               1000,
//               "Church",
//               1000,
             
//             ]} */}
//             {/* wrapper="span"
//             speed={50}
//             repeat={Infinity}
//           />
//         </h1>
//         <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
//         Psalm 91:4<br></br>
// "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart." </p>
        
//       </motion.div> */}
//       {/* <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }} 
//         className="col-span-4 place-self-center mt-4 lg:mt-0"
//       >
    
//       </motion.div> */}
//       {/* </div>
//     </div> */}