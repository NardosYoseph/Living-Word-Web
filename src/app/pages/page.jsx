"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="relative w-full min-h-screen">
        <Image
          src="/images/lwpas2.jpg"
          alt="background"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      
      <div className="container mx-auto px-12 py-4 mt-24">
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
};

export default HomePage;
