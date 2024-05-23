"use client";
import React, { useTransition, useState } from "react";
import TabButton from "@/app/components/TabButton";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementsSection from "../components/AchievementsSection";
import LoginForm from "./users/login/page";
import Link from "next/link";

const HomePage =()=> {

  return (
    <main className="flex min-h-screen flex-col bg-white ">
      <Navbar />
   
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
       
        <EmailSection />
      </div>
     
    </main>
  );
}
export default HomePage;
