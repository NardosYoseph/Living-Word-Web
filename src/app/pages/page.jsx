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

  const TAB_DATA = [
    {
      title: "Vision",
      id: "Vision",
      content: (
        <ul className="list-disc pl-2">
          <li>To be a beacon of hope, transforming our community by sharing the love of Christ through impactful outreach programs.</li>
        </ul>
      ),
    },
    {
      title: "Mission",
      id: "Mission",
      content: (
        <ul className="list-disc pl-2">
          <li>To actively serve those in need through practical care, compassionate ministries, and opportunities to experience God's love, fostering a spirit of service and transformation within our community.</li>
        </ul>
      ),
    },
    {
      title: "Address",
      id: "Address",
      content: (
        <ul className="list-disc pl-2">
          <li>Dire Dawa: Sabyan Yohannes Building, at a distance of 100 meters</li>
          <li>Addis Ababa: CMC near to gas station, Ejigayew Dibaba Building, ground floor</li>
        </ul>
      ),
    },
  ];


  const [tab, setTab] = useState("Vision");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <main className="flex min-h-screen flex-col bg-white ">
      <Navbar />
   
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        
        <ProjectsSection />
        <div className="mt-8 text-black">
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Vision")}
              active={tab === "Vision"}
            >
              Vision
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Mission")}
              active={tab === "Mission"}
            >
              Mission
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Address")}
              active={tab === "Address"}
            >
              Address
            </TabButton>
          </div>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        
        <EmailSection />
      </div>
     
    </main>
  );
}
export default HomePage;
