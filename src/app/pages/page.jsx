"use client";
import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("../components/HeroSection"));
const Navbar = lazy(() => import("../components/Navbar"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const Footer = lazy(() => import("../components/Footer"));
const RecentEvent = lazy(() => import("../components/videoSection"));
const HeroNavbar = lazy(() => import("../components/heroSecttionNavbar"));
const MissionVisionGoalSection = lazy(() => import("../components/missionSection"));
const LeadersSection = lazy(() => import("../components/leadersSection"));

const HomePage = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeroVisible(rect.bottom > 0);
      }
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
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
        </Suspense>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <MissionVisionGoalSection />
        <LeadersSection />
        <AboutSection />
        <ProjectsSection />
        <RecentEvent />
        <Footer />
      </Suspense>
    </main>
  );
};

export default HomePage;
