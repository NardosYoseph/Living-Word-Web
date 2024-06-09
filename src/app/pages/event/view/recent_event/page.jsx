"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EventServices from '@/app/services/event_service';
import AdminNavbar from '@/app/components/AdminNavbar';
import ProtectedRoute from '@/app/lib/protecteRoute';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RecentEventPage = () => {
  const client = EventServices;
  const [events, setEvents] = useState([]);
  const [visibility, setVisibility] = useState({});

  const fetchEvents = async () => {
    const eventData = await client.getRecentEvents();
    console.log(eventData);
    if (eventData) {
      const events = eventData.eventList;
      setEvents(events);
      const initialVisibility = {};
      events.forEach(event => {
        initialVisibility[event._id] = { video: false, thumbnail: false };
      });
      setVisibility(initialVisibility);
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

  const toggleVisibility = (eventId, type) => {
    setVisibility(prevState => ({
      ...prevState,
      [eventId]: {
        ...prevState[eventId],
        [type]: !prevState[eventId][type],
      },
    }));
  };

  return (
    <ProtectedRoute allowedRoles={"ADMIN"}>
      <div className="relative min-h-screen min-w-screen p-4 text-xl text-gray-700 bg-white sm:p-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/chh.png')" }}
        ></div>
        <div className="relative z-10 m-2 p-4 bg-white bg-opacity-90 shadow-lg sm:m-10 sm:p-10 mt-20 ">
          <AdminNavbar />
          <div className='gap-8 flex flex-col mb-5 sm:flex-row '>
            <Link href="/pages/event/addRecentEventVideo">
              <button className="px-4 py-2 mb-4 rounded-lg bg-[#7469B6] text-white font-medium cursor-pointer hover:bg-blue-700 sm:mb-0">
                Add Recent Event Video
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-black mt-10 mb-2 text-black">
              <thead>
                <tr>
                  <th className="px-2 py-2 bg-[#7469B6] text-white border border-gray-800 sm:px-4">Event Title</th>
                  <th className="px-2 py-2 bg-[#7469B6] text-white border border-gray-800 sm:px-4">Description</th>
                  <th className="px-2 py-2 bg-[#7469B6] text-white border border-gray-800 sm:px-4">Thumbnail</th>
                  <th className="px-2 py-2 bg-[#7469B6] text-white border border-gray-800 sm:px-4">Video</th>
                  <th className="px-2 py-2 bg-[#7469B6] text-white border border-gray-800 sm:px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(events) && events.length > 0 ? (
                  events.map((event, index) => {
                    const key = event._id || index;
                    return (
                      <tr key={key}>
                        <td className="px-2 py-2 border border-gray-800 sm:px-4">{event.title}</td>
                        <td className="px-2 py-2 border border-gray-800 sm:px-4">{event.description}</td>
                        <td className="px-2 py-2 border border-gray-800 sm:px-4">
                          <button onClick={() => toggleVisibility(event._id, 'thumbnail')}>
                            {visibility[event._id]?.thumbnail ? <FaEyeSlash /> : <FaEye />}
                          </button>
                          {visibility[event._id]?.thumbnail && event.thumbnail ? (
                            <img src={event.thumbnail} alt="Thumbnail" className="w-24 h-24 object-cover mt-2" />
                          ) : null}
                        </td>
                        <td className="px-2 py-2 border border-gray-800 sm:px-4">
                          <button onClick={() => toggleVisibility(event._id, 'video')}>
                            {visibility[event._id]?.video ? <FaEyeSlash /> : <FaEye />}
                          </button>
                          {visibility[event._id]?.video && event.video ? (
                            <video controls className="w-48 h-48 mt-2">
                              <source src={event.video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : null}
                        </td>
                        <td className="px-2 py-2 border border-gray-800 sm:px-4">
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
      </div>
    </ProtectedRoute>
  );
};

export default RecentEventPage;
