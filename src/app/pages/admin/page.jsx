"use client";
import Card from "@/app/dashboard/card/card";
import BarChart from "@/app/dashboard/charts/barchart/BarChart";
import PieChart from "@/app/dashboard/charts/piechart/PieChart";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import styles from "./admin.module.css";
import { Bar } from "react-chartjs-2";
import NavLink from "@/app/components/NavLink";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import AdminNavbar from "@/app/components/AdminNavbar";

const AdminPage = () => {
  const router = useRouter();
  const navLinks = [
    {
      title: "HomePage",
      path: "/",
    },
    {
        title: "Users",
        path: "/",
      },
      {
        title: "Add Event",
        path: "/pages/event/add",
      },
  ];
  
  const handleAddEventClick = () => {
    toast.success("Navigating to Add Event page...");
    router.push("/pages/event/add"); // Replace with your actual add event page route
  };

  const handleViewUsersClick = () => {
    toast.success("View Users button clicked!");
    // You can add navigation or other actions here if needed
  };

  // Sample data for the charts
  const userData = [
    { month: 'Jan', data: 20 },
    { month: 'Feb', data: 30 },
    { month: 'Mar', data: 40 },
    { month: 'Apr', data: 100 },
    { month: 'May', data: 80 },
    { month: 'Jun', data: 10 },
    { month: 'Jul', data: 60 },
    { month: 'Aug', data: 70 },
    { month: 'Sep', data: 60 },
    { month: 'Oct', data: 90 },
    { month: 'Nov', data: 60 },
  ];

const eventData = [100, 50, 75, 120, 80];

  return ( 
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 mx-auto px-4 py-8 md:px-8 md:py-12">
<AdminNavbar />
<br></br>
      <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
          <Card title="Users" value="20" percentage="20" />
          <Card title="Events" value="10" percentage="10" />
        </div>
        <div className='grid md:grid-cols-2 gap-4 md:gap-20'>
   <BarChart userData={userData} />
  <PieChart EventData={eventData} />
</div>
</div>
  );
};

export default AdminPage;
