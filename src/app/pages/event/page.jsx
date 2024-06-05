"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EventServices from '@/app/services/event_service'; 
import AdminNavbar from '@/app/components/AdminNavbar';
import ProtectedRoute from '@/app/lib/protecteRoute';

const EventPage = () => {
  const client=EventServices;

  const [events, setEvents] = useState([]);

 
  const fetchEvents = async () => {
    const eventData = await client.getEvents();
    console.log(eventData);
    if (eventData) { // Check if data exists
      const events = eventData.eventList;
      setEvents(events); // Update state with event list
    } else {
      console.error("Error fetching events or data not found");
      // Handle the case where data is not available
    }   
};
  useEffect(() => {
    fetchEvents();
  }, []);
  const handleDelete = async (eventId) => {
   try {
    console.log(eventId)
    const response = await client.deleteEvent(eventId); // Pass eventId as an object
   if (response) {
     setEvents(events.filter(event => event._id !== eventId));
     }
     } catch (error) {
   console.error("Error deleting event", error);
     }
    };
  
  return (
    <ProtectedRoute allowedRoles={"ADMIN"}>
    <div className="min-h-screen m-10 p-20 text-xl text-gray-700 bg-white">
        <AdminNavbar/>
    
        <Link href="/pages/event/add">
          <button className="px-4 py-2 mb-4 rounded-lg bg-[#7469B6] text-white font-medium cursor-pointer hover:bg-blue-700 mb-0">
            Add New Event</button>
        </Link>
      
     
      <div >
        <table className="w-full border-black mt-24 mb-2 text-black">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Event Title</th>
              <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Description</th>
              <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Date</th>
              <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Time</th>
              <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Address</th>
              <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Image</th>
              <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Action</th>
             
            </tr>
          </thead>
          <tbody>
            {Array.isArray(events) && events.length > 0 ? (
              events.map((event,index) => {
                const key = event._id || index;
             
                return (
                  <tr key={key}>
                    <td className="px-4 py-2 border border-gray-800">{event.title}</td>
                    <td className="px-4 py-2 border border-gray-800">{event.description}</td>
                    <td className="px-4 py-2 border border-gray-800">{event.date}</td>
                    <td className="px-4 py-2 border border-gray-800">{event.time}</td>
                    <td className="px-4 py-2 border border-gray-800">{event.address}</td>  
    
                    <td className="px-4 py-2 border border-gray-800">
                      <div>
                         <img
  src={event.image}  
  alt={`Image for ${event.title}`}
  style={{ maxWidth: '100px', cursor: 'pointer' }}
/>
                      </div>
                    </td>
                    <td className="px-4 py-2 border border-gray-800">
                      <div className="flex space-x-2">
                        {/* <Link href={`/dashboard/Incidents/update/${event.id}`}> 
                          <button className="px-5 py-2 rounded-md text-white focus:outline-none cursor-pointer bg-blue-500 hover:bg-blue-700">Update</button>
                        </Link> 
                        */}
                        <button className="px-5 py-2 rounded-md text-white focus:outline-none cursor-pointer bg-red-500 hover:bg-red-700" onClick={() => handleDelete(event._id)}>Delete</button>
                      </div>
                    </td>
                    
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="10">No Incidents found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    
    </div>
    </ProtectedRoute>
  );
};
export default EventPage;