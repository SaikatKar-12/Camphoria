/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import { motion } from "framer-motion";
import Hexagon from "@/Components/heaxagon-tooltip";

const events = [
  {
    id: "1st-day",
    day: "1st Day",
    date: "February 08, 2024",
    items: [
      {
        title: "Historical Song & Music Fest",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
      {
        title: "Classical Music Fest 2024",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
      {
        title: "DJ Mixers Isolated Music Fest",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
    ],
  },
  {
    id: "2nd-day",
    day: "2nd Day",
    date: "February 16, 2024",
    items: [
      {
        title: "Historical Song & Music Fest",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
      {
        title: "Classical Music Fest 2024",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
      {
        title: "DJ Mixers Isolated Music Fest",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
    ],
  },
  {
    id: "3rd-day",
    day: "3rd Day",
    date: "February 17, 2024",
    items: [
      {
        title: "Historical Song & Music Fest",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
      {
        title: "Classical Music Fest 2024",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
      {
        title: "DJ Mixers Isolated Music Fest",
        location: "New Hyde, 11040",
        time: "08:00 AM - 05:00 PM",
        image: "./src/assets/image.png",
      },
    ],
  },
];

export default function EventSchedule() {
  const [activeTab, setActiveTab] = useState("1st-day");

  // Find active event by ID
  const activeEvent = events.find((event) => event.id === activeTab);

  return (
    <div className="bg-gray-900 text-white p-10 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6">
        Follow Our Event <span className="text-pink-500">Schedule</span>
      </h2>

      {/* Tabs */}
      <ul className="flex justify-center items-center max-w-xl w-full mx-auto mb-12">
        {events.map((tab) => (
          <li
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative cursor-pointer flex-1 text-center p-4 
            ${tab.id === "1st-day" ? "rounded-t-[55px] rounded-l-[55px]" : ""}
            ${tab.id === "2nd-day" ? "rounded-t-[40px]" : ""} 
            ${tab.id === "3rd-day" ? "rounded-t-[55px] rounded-r-[55px]" : ""} 
            transition-all duration-300 
          ${
            activeTab === tab.id
              ? "bg-purple-600 text-white"
              : "bg-white text-black"
          }`}
          >
            <h3 className="text-lg font-bold">
              {tab.day.split(" ")[0]}
              <span className="text-sm"> {tab.day.split(" ")[1]}</span>
            </h3>
            <p className="text-sm">{tab.date}</p>
            {activeTab === tab.id && (
              <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[18px] border-transparent border-t-purple-600"></div>
            )}
          </li>
        ))}
      </ul>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl mx-auto py-10">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

        {activeEvent?.items.length > 0 ? (
          activeEvent.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              } mb-10 ` } 
            >
              {/* Event Card */}
              {/* Container for Event Card and "BUY TICKETS" */}
              <div className="relative flex items-center w-[800px] ml-8 max-w-5xl">
                {/* Event Card */}
                <div className="bg-blue-500 text-white p-2 rounded-full shadow-lg flex items-center">
                  {/* Event Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-20 rounded-full object-cover mr-4"
                  />

                  {/* Event Details */}
                <div className="flex flex-row space-y-1">
                  <h3 className="text-lg font-bold w-[50%]">{item.title}</h3>
                  <div className="flex flex-col space-y-1 pr-2">
                    <p className="text-sm opacity-75 flex items-center pt-2">
                      📍 <span className="ml-1">{item.location}</span>
                    </p>
                    <p className="text-sm opacity-75 flex items-center">
                      ⏰ <span className="ml-1">{item.time}</span>
                    </p>
                  </div>
                </div>
                </div>

                {/* Dotted Line & Square Tooltip */}
                <div className="flex items-center ml-4 space-x-2">
                <div className="w-48 h-1 bg-[radial-gradient(circle,_yellow_2px,_transparent_2px)] bg-[length:6px_6px]"></div>

                  {/* Dotted Line */}
                  
                <div className="absolute">
                    <Hexagon/>
                </div>
                </div>
                
                {/* Circular "BUY TICKETS" Button */}
                <div className="">
                  <button className="relative w-20 h-20 flex items-center justify-center rounded-full bg-purple-700 text-white text-[8px] font-bold shadow-lg hover:text-pink-500 underline">
                     BUY TICKETS
                  </button>
                </div>
              </div>
              {/* Connector Circle */}
              <div className="absolute left-1/2 top-[-28px] transform -translate-x-1/2 w-6 h-6 p-[5px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full">
                {/* White Inner Circle */}
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-lg">
            No events scheduled for this day.
          </p>
        )}
      </div>
    </div>
  );
}
