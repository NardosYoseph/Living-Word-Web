"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import RecentEvent from "../components/videoSection";

const HomePage = () => {
  return (
    <main className="flex min-h-screen  flex-col bg-white gap-8 p-0">
      

          <Navbar />
      <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <RecentEvent />
        <EmailSection />
        <Footer/>

    </main>
  );
};

export default HomePage;
