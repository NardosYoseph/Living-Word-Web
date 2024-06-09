"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EventServices from '@/app/services/event_service'; 
import AdminNavbar from '@/app/components/AdminNavbar';
import ProtectedRoute from '@/app/lib/protecteRoute';

const EventPage = () => {
  const client = EventServices;
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const eventData = await client.getEvents();
      if (eventData && eventData.eventList) {
        setEvents(eventData.eventList);
      } else {
        console.error("Error fetching events or data not found");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }   
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (eventId) => {
    try {
      console.log(eventId);
      const response = await client.deleteEvent(eventId);
      if (response) {
        setEvents(events.filter(event => event._id !== eventId));
      }
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };
  
  return (
    <ProtectedRoute allowedRoles={"ADMIN"}>
      <div className="min-h-screen min-w-screen m-0 p-20 text-xl text-gray-700 bg-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/chh.png')" }}
        ></div>
        <div className="relative z-10 m-0 p-4 bg-white bg-opacity-90 shadow-lg mt-20 sm:m-0 ">
          <AdminNavbar />
          <div className='gap-0 flex flex-col mb-5 sm:flex-row p-0 mr-0 sm:m-0 min-w-full w-full'>
            <Link href="/pages/event/add">
              <button className="px-4 py-2 mb-4 rounded-lg bg-[#7469B6] text-white font-medium cursor-pointer hover:bg-blue-700 mb-0">
                Add New Event
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-black mt-5 mb-2 text-black">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Event Title</th>
                  <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Description</th>
                  <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Date</th>
                  <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Time</th>
                  <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Address</th>
                  <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Image</th>
                  <th className="px-4 py-2 bg-[#7469B6] text-white border border-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(events) && events.length > 0 ? (
                  events.map((event, index) => (
                    <tr key={event._id || index}>
                      <td className="px-4 py-2 border border-black">{event.title}</td>
                      <td className="px-4 py-2 border border-black">{event.description}</td>
                      <td className="px-4 py-2 border border-black">{event.date}</td>
                      <td className="px-4 py-2 border border-black">{event.time}</td>
                      <td className="px-4 py-2 border border-black">{event.address}</td>  
                      <td className="px-4 py-2 border border-black">
                        <div>
                          <img
                            src={event.image}  
                            alt={`Image for ${event.title}`}
                            className="max-w-full h-auto cursor-pointer"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-2 border border-black">
                        <div className="flex space-x-2">
                          <button
                            className="px-5 py-2 rounded-md text-white focus:outline-none cursor-pointer bg-red-500 hover:bg-red-700"
                            onClick={() => handleDelete(event._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No Events found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default EventPage;
