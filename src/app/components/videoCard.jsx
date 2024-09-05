"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoCard = ({ event }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="max-w-md rounded-xl overflow-hidden shadow-lg">
      <div onClick={handleVideoClick} className="cursor-pointer relative">
       
           <iframe
           className="w-full h-48 md:h-72"
           src={event.videoUrl}// Use the YouTube embed URL here
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
         ></iframe>
       
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.title}</div>
        <p className="text-gray-700 text-base">{event.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
