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
        {isPlaying ? (
          <video className="w-full h-48 md:h-72" controls autoPlay>
            <source src={event.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="h-48 md:h-72 w-full relative bg-center">
            <img
              className="w-full h-48 md:h-72 object-cover"
              src={event.thumbnail}
              alt={`Thumbnail for ${event.title}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-2">
                <FontAwesomeIcon icon={faPlay} className="w-10 h-10 text-gray-800" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.title}</div>
        <p className="text-gray-700 text-base">{event.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
