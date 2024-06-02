import React from "react";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

const EventCard = ({ imgUrl, title, description, date, time, address }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div
        className="h-48 md:h-72 w-full relative bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0  "></div>
      </div>
      <div className="text-black bg-white p-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="flex items-center text-sm text-black-600 mb-1">
          <CalendarIcon className="h-5 w-5 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-black-600 mb-1">
          <ClockIcon className="h-5 w-5 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-black-600 mb-3">
          <MapPinIcon className="h-5 w-5 mr-2" />
          <span>{address}</span>
        </div>
        <p className="text-black-800">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
