"use client";
import React, { useState, useRef } from "react";
import EventCard from "./ProjectCard";
import EventCategory from "./eventCategory";
import { motion, useInView } from "framer-motion";

const eventsData = [
  {
    id: 1,
    title: "Prayer",
    date: "June 15, 2024",
    time: "6:00 PM",
    adress: "123 Main St, City, Country",
    description: "Sunday mornning 9:00 AM - 10:00 AM",
    image: "/images/sundpray.jpg",
    tag: ["All", "Weekly"]
  },
  {
    id: 1,
    title: "Worship",
    date: "June 15, 2024",
    time: "6:00 PM",
    adress: "123 Main St, City, Country",
    description: "Sunday mornning 10:00 AM - 11:00 AM",
    image: "/images/sund.jpg",
    tag: ["All", "Weekly"],
  },
  {
    id: 2,
    title: "Word of God",
    date: "June 15, 2024",
    time: "6:00 PM",
    adress: "123 Main St, City, Country",
    description: "Sunday mornning 11:00 AM - 7:00 PM",
    image: "/images/lwpastor.jpg",
    tag: ["All", "Weekly"],
  },
  {
    id: 3,
    title: "Tuseday Prayers",
    date: "June 15, 2024",
    time: "6:00 PM",
    adress: "123 Main St, City, Country",
    description: "Tuseday afternoon 4:00 AM-7:00 PM",
    image: "/images/prayers.jpg",
    tag: ["All", "Weekly"],
  },
  {
    id: 4,
    title: "Visionary Generation",
    date: "June 15, 2024",
    time: "6:00 PM",
    adress: "123 Main St, City, Country",
    description: "Every year july 30",
    image: "/images/lwvgroup.jpg",
    tag: ["All", "Yearly"],
  },
  
];
const EventSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredevents = eventsData.filter((event) =>
    event.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Programmes">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        Our Programmes
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <EventCategory
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <EventCategory
          onClick={handleTagChange}
          name="Weekly"
          isSelected={tag === "Weekly"}
        />
        <EventCategory
          onClick={handleTagChange}
          name="Yearly"
          isSelected={tag === "Yearly"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredevents.map((event, index) => (
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
              address={event.adress}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default EventSection;
