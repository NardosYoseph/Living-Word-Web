import React from "react";
import { FaBullseye, FaEye, FaFlag } from "react-icons/fa";

const MissionVisionGoalSection = () => {
  return (
    <section id="mission"className="bg-gray-200 py-0 mb-20 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-5 mb-5">
        {/* Mission Div */}
        <div className="flex flex-col justify-center items-center mx-4 my-4 md:my-0 md:w-1/3">
          <FaBullseye className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Mission</h3>
          <p className="text-gray-700 text-center">
          Our mission is to spread the teachings of Jesus Christ by serving our community with grace and humility. We are committed to nurturing spiritual growth through worship, education, and fellowship, while actively engaging in outreach programs that address the physical and spiritual needs of those around us. </p>
        </div>

        {/* Vision Div */}
        <div className="flex flex-col justify-center items-center mx-4 my-4 md:my-0 md:w-1/3">
          <FaEye className="text-4xl text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Vision</h3>
          <p className="text-gray-700 text-center">
          Our vision is to be a beacon of hope and love in our community, reflecting the light of Christ through acts of kindness, compassion, and faith. We strive to create a welcoming environment where everyone feels valued and encouraged to grow spiritually, fostering a deeper connection with God and each other. </p>
        </div>

        {/* Goal Div */}
        <div className="flex flex-col justify-center items-center mx-4 my-4 md:my-0 md:w-1/3">
          <FaFlag className="text-4xl text-red-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Goal</h3>
          <p className="text-gray-700 text-center">
          Our goal is to cultivate a vibrant and inclusive church family that supports one another in their faith journeys. We aim to inspire and equip our members to live out their faith daily, making a positive impact in the world by embodying Christ’s love and compassion in all that we do.  </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionGoalSection;
