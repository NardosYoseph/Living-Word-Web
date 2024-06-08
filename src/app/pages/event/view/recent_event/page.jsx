"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EventServices from '@/app/services/event_service'; 
import AdminNavbar from '@/app/components/AdminNavbar';
import ProtectedRoute from '@/app/lib/protecteRoute';

const RecentEventPage = () => {
  const client = EventServices;
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const eventData = await client.getRecentEvents();
    console.log(eventData);
    if (eventData) {
      const events = eventData.eventList;
      setEvents(events);
    } else {
      console.error("Error fetching events or data not found");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (eventId) => {
    try {
      console.log(eventId);
      const response = await client.deleteRecentEvent(eventId);
      if (response) {
        setEvents(events.filter(event => event._id !== eventId));
      }
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  return (
    <ProtectedRoute allowedRoles={"ADMIN"}>
      <div className="min-h-screen min-w-screen m-10 p-20 text-xl text-gray-700 bg-white">
        <AdminNavbar />
        <div className='gap-8 flex flex-row mb-5'>
          <Link href="/pages/event/addRecentEventVideo">
            <button className="px-4 py-2 mb-4 rounded-lg bg-[#7469B6] text-white font-medium cursor-pointer hover:bg-blue-700 mb-0">
              Add Recent Event Video
            </button>
          </Link>
        </div>
        <div>
          <table className="w-full border-black mt-10 mb-2 text-black">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Event Title</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Description</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Thumbnail</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Video</th>
                <th className="px-4 py-2 bg-[#7469B6] text-white border border-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(events) && events.length > 0 ? (
                events.map((event, index) => {
                  const key = event._id || index;
                  return (
                    <tr key={key}>
                      <td className="px-4 py-2 border border-gray-800">{event.title}</td>
                      <td className="px-4 py-2 border border-gray-800">{event.description}</td>
                      <td className="px-4 py-2 border border-gray-800">
                        {event.thumbnailUrl ? (
                          <img src={event.thumbnail} alt="Thumbnail" className="w-24 h-24 object-cover" />
                        ) : (
                          'No Thumbnail'
                        )}
                      </td>
                      <td className="px-4 py-2 border border-gray-800">
                        {event.videoUrl ? (
                          <video controls className="w-48 h-48">
                            <source src={event.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          'No Video'
                        )}
                      </td>
                      <td className="px-4 py-2 border border-gray-800">
                        <div className="flex space-x-2">
                          <button className="px-5 py-2 rounded-md text-white focus:outline-none cursor-pointer bg-red-500 hover:bg-red-700" onClick={() => handleDelete(event._id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">No Events found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRoute>
  );
};
export default RecentEventPage;
