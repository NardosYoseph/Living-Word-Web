import React from "react";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const EventCard = ({ imgUrl, title, description,date,time,address }) => {
  return (
    <div>
      <div
        className="h-59 md:h-72 md:w-100 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="text-black rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <CalendarIcon className="h-5 w-5 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <ClockIcon className="h-5 w-5 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPinIcon className="h-5 w-5 mr-2" />
          <span>{address}</span>
        </div>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
