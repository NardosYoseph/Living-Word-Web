"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Prayer",
    description: "Sunday mornning 9:00 AM - 10:00 AM",
    image: "/images/sundpray.jpg",
    tag: ["All", "Weekly"],
    gitUrl: "https://github.com/NardosYoseph/aba_db_incident_tracker",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Worship",
    description: "Sunday mornning 10:00 AM - 11:00 AM",
    image: "/images/sund.jpg",
    tag: ["All", "Weekly"],
    gitUrl: "https://github.com/NardosYoseph/aba_db_incident_tracker",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Word of God",
    description: "Sunday mornning 11:00 AM - 7:00 PM",
    image: "/images/lwpastor.jpg",
    tag: ["All", "Weekly"],
    gitUrl: "https://github.com/NardosYoseph/Futter-e-commerce-app",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Tuseday Prayers",
    description: "Tuseday afternoon 4:00 AM-7:00 PM",
    image: "/images/prayers.jpg",
    tag: ["All", "Weekly"],
    gitUrl: "https://github.com/NardosYoseph/Futter-e-commerce-app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Visionary Generation",
    description: "Every year july 30",
    image: "/images/lwvgroup.jpg",
    tag: ["All", "Yearly"],
    gitUrl: "https://github.com/NardosYoseph/Flutter-Event-App",
    previewUrl: "/",
  },
  
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
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
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Weekly"
          isSelected={tag === "Weekly"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Yearly"
          isSelected={tag === "Yearly"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
