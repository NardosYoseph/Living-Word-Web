import { useEffect, useState } from 'react';
import EventServices from '../services/event_service';
import VideoCard from './videoCard';
import { motion } from 'framer-motion';

const RecentEvent = () => {
  const eventClient = EventServices;
  const events=[
    {videoUrl:"https://www.youtube.com/embed/GIvCD47cWTs",description:"Sibiraa naaf dhufe humni",title:"Sibiraa naaf dhufe humni"},
    {videoUrl:"https://www.youtube.com/embed/oZwXirdsK5g",description:"Situ jiraan jira",title:"Situ jiraan jira"},
    {videoUrl:"https://www.youtube.com/embed/rBB4by7M0Ww",description:"Abdin keenya jiraataadha",title:"Abdin keenya jiraataadha"},
    {videoUrl:"https://www.youtube.com/embed/FTa1sbWidLg",description:"Aarsaa galata keenyaa",title:"Aarsaa galata keenyaa"},
    
    ]
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await eventClient.getRecentEvents();
  //       setEvents(response.eventList);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     }
  //   };

  //   fetchEvents();
  // }, []);

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
    <section id="recentEvents" className="relative overflow-hidden mb-10">
      <div className="bg-white bg-opacity-20 py-8 px-4 xl:px-16">
        <h1 className="text-3xl font-bold mb-6 text-[#DC5F00]">Recent Event Videos</h1>
        <div className="flex gap-6 relative">
      <button onClick={handlePrev} className="absolute rounded-full top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white z-10">
            ❮
          </button>
          <button onClick={handleNext} className="absolute rounded-full top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white z-10">
            ❯
          </button>
          <div className="flex space-x-6 overflow-x-auto no-scrollbar ">
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
                <div className='hover:scale-105'>
                <VideoCard event={event} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvent;
