"use client";
import React, { useState, useRef, useEffect } from "react";
import EventCard from "./ProjectCard";
import EventCategory from "./eventCategory";
import EventServices from "@/app/services/event_service";
import "../globals.css";

const EventSection = () => {
  const eventClient = EventServices;
  const [eventsData, setEventsData] = useState([]);
  const [category, setCategory] = useState("All");
  const containerRef = useRef(null);
  const cardWidth = 300; // Adjust according to your card width

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await eventClient.getEvents();
        setEventsData(response?.eventList || []); // Ensure eventList is an array or set as empty
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [eventClient]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredEvents = Array.isArray(eventsData)
    ? eventsData.filter(
        (event) =>
          category === "All" || event.category.includes(category)
      )
    : [];

  const scrollNext = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const nextScrollLeft = Math.min(scrollLeft + cardWidth, maxScroll);
      containerRef.current.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      const { scrollLeft } = containerRef.current;
      const prevScrollLeft = Math.max(0, scrollLeft - cardWidth);
      containerRef.current.scrollTo({ left: prevScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section
      id="Programmes"
      className="bg-gray-200 py-10 mt-10"
      style={{ backgroundImage: "url(/images/chh.png)", backgroundSize: "cover" }}
    >
      <div className="w-full bg-grey-200 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-white text-center">Programmes</h2>
        <div className="text-black flex flex-row w-full min-w-full gap-1 py-0 mt-0 mr-10 justify-center">
          <EventCategory
            onClick={handleCategoryChange}
            name="All"
            isSelected={category === "All"}
          />
          <EventCategory
            onClick={handleCategoryChange}
            name="Weekly"
            isSelected={category === "Weekly"}
          />
          <EventCategory
            onClick={handleCategoryChange}
            name="Yearly"
            isSelected={category === "Yearly"}
          />
          <EventCategory
            onClick={handleCategoryChange}
            name="Special"
            isSelected={category === "Special"}
          />
        </div>
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 mt-10 overflow-x-auto no-scrollbar h-full relative"
          >
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="flex-none"
                style={{ minWidth: `${cardWidth}px` }}
              >
                <div className="h-full flex items-center rounded-gl transform transition-transform duration-300 hover:scale-105">
                  <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    imgUrl={event.image}
                    date={event.date}
                    time={event.time}
                    address={event.address}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollPrev}
            className="absolute rounded-full top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white text-black z-10"
          >
            ❮
          </button>
          <button
            onClick={scrollNext}
            className="absolute rounded-full top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white text-black z-10"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
