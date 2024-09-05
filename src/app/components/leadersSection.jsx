
import React, { useState, useRef, useEffect } from "react";
const leaders = [
  { name: 'Paster Belachew Alemu', church: 'Ejere Church',imgSrc: '/images/pastor2.jpg' },
  { name: 'Paster Paulos',church: 'Ejere Church', imgSrc: '/images/pastor3.jpg' },
  { name: 'Zemari Yoseph Dereje', church: 'Dire Dawa Church',imgSrc: '/images/zemari1.jpg' },
  { name: 'Singer Gemechis Girma', church: 'Addis Ababa Church',imgSrc: '/images/zemari2.jpg' },
  { name: 'keyboardist Kuma Negesa', church: 'Dire Dawa Church',imgSrc: '/images/key.jpg' },
  { name: 'Leader 5', church: 'Dire Dawa Church',imgSrc: '/images/chh.png' },
];

const LeadersSection = () => {
    const containerRef = useRef(null);
    const cardWidth = 300;
    const scrollNext = () => {
        if (containerRef.current) {
          const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
          const maxScroll = scrollWidth - clientWidth;
          const nextScrollLeft = Math.min(scrollLeft + cardWidth, maxScroll);
          containerRef.current.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
        }
      };
    
      const scrollPrev = () => {
        if (containerRef.current) {
          const { scrollLeft } = containerRef.current;
          const prevScrollLeft = Math.max(0, scrollLeft - cardWidth);
          containerRef.current.scrollTo({ left: prevScrollLeft, behavior: 'smooth' });
        }
      };
  return (
    <section
      className="relative text-white py-20 mb-0 pt-20"
      style={{ backgroundImage: 'url(/images/wor.png)', backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Shadow Cover */}
      <div className="relative z-10 container mx-auto px-6 ">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Leaders</h2>
        <div ref={containerRef} className=" flex space-x-10 overflow-x-auto no-scrollbar py-6 px-2">
           {/* <div className="ml-10"></div> */}
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-52 h-52">
                <img
                  src={leader.imgSrc}
                  alt={leader.name}
                  className="rounded-full object-cover w-full h-full shadow-lg"
                />
              </div>
              <div className="mt-4  font-semibold text-center flex flex-col items-center">
                <span className="w-full text-center ">{leader.name}</span>
               <div className="h-30 w-40"> <span className="mt-1 text-center text-[#F57D1F]">{leader.church}</span>
               </div>
              </div> </div>
          ))}
        </div>
        <button onClick={scrollPrev} className="absolute rounded-full top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white text-black z-10">
            ❮
          </button>
          <button onClick={scrollNext} className="absolute rounded-full top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white text-black z-10">
            ❯
          </button>
      </div>
    </section>
  );
};

export default LeadersSection;
