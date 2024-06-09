"use client"
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
import ProtectedRoute from "@/app/lib/protecteRoute";

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
    { month: 'Jan', data: 0 },
    { month: 'Feb', data: 0 },
    { month: 'Mar', data: 0 },
    { month: 'Apr', data: 10 },
    { month: 'May', data: 30 },
    { month: 'Jun', data: 15 },
    { month: 'Jul', data: 13 },
    { month: 'Aug', data: 6 },
    { month: 'Sep', data: 5 },
    { month: 'Oct', data: 4 },
    { month: 'Nov', data: 4 },
  ];

  const eventData = [100, 50, 75];

  return ( 
    <ProtectedRoute allowedRoles={['ADMIN']}>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 mx-auto px-4 py-8 md:px-8 md:py-12 bg-cover bg-center" style={{ backgroundImage: "url('/images/chh.png') ",  }}>
        <AdminNavbar />
        <br />
        <div className='grid md:grid-cols-2 gap-4 md:gap-8 mt-20'>
          <Card title="Users" value="50" percentage="20" />
          <Card title="Events" value="10" percentage="10" />
        </div>
        <div className='grid md:grid-cols-2 gap-2 md:gap-10 mt-5'>
          <BarChart userData={userData} />
          <PieChart EventData={eventData} />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminPage;
