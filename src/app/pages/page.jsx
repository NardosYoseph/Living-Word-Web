"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import RecentEvent from "../components/videoSection";
import HeroNavbar from "../components/heroSecttionNavbar";
import MissionVisionGoalSection from "../components/missionSection";
import LeadersSection from "../components/leadersSection";

const HomePage = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      const rect = heroSection.getBoundingClientRect();
      setIsHeroVisible(rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col bg-white gap-0 p-0">
      {isHeroVisible ? <HeroNavbar /> : <Navbar />}
      <section id="hero-section">
        <HeroSection />
      </section>
      <MissionVisionGoalSection/>
<LeadersSection/>
      <AboutSection />
      <ProjectsSection />
      <RecentEvent />
      {/* <EmailSection /> */}
      <Footer />
    </main>
  );
};

export default HomePage;
