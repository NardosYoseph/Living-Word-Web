import { useEffect, useState } from 'react';
import EventServices from '../services/event_service';
import VideoCard from './videoCard';
import { motion } from 'framer-motion';

const RecentEvent = () => {
  const eventClient = EventServices;
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await eventClient.getRecentEvents();
        setEvents(response.eventList);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="recentEvents" className="relative overflow-hidden">
      <div className="bg-white bg-opacity-20 py-8 px-4 xl:px-16">
        <h1 className="text-3xl font-bold mb-6 text-[#DC5F00]">Recent Events</h1>
        <div className="flex gap-6 relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white font-extrabold text-4xl sm:text-4xl lg:text-4xl bg-opacity-70 p-4 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none z-10"
            onClick={handlePrev}
          >
            ❮
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white font-extrabold text-4xl sm:text-4xl lg:text-4xl bg-opacity-70 p-4 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none z-10"
            onClick={handleNext}
          >
            ❯
          </button>
          <div className="flex space-x-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="shadow-xsl flex-shrink-0 w-80"
                style={{
                  marginLeft: index === 0 ? `${currentIndex * -80}px` : undefined,
                }}
              >
                <VideoCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvent;
