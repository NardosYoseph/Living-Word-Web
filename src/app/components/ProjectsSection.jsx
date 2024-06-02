"use client";
import React, { useState, useRef ,useEffect} from "react";
import EventCard from "./ProjectCard";
import EventCategory from "./eventCategory";
import { motion, useInView } from "framer-motion";
import EventServices from '@/app/services/event_service';


const EventSection = () => {
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await eventClient.getEvents();
        setEventsData(response.eventList);
        console.log(eventsData)
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    fetchEvents();
  }, []);
  
const eventClient = EventServices;
const [eventsData, setEventsData] = useState([]);
  const [category, setCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredEvents = eventsData.filter((event) => 
    category === "All" || event.category.includes(category)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Programmes">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        Programmes News
      </h2>
      <div className="text-black flex flex-row cols-3 justify-center items-center gap-2 py-6 overflow-hidden">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredEvents.map((event, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              imgUrl={event.image}
              date={event.date}
              time={event.time}
              address={event.address}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default EventSection;
