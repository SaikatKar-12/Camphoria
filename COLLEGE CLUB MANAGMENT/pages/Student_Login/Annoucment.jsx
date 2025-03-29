import React from "react";
import { FaEllipsisH } from "react-icons/fa";

const announcements = [
  {
    message: "Ms. Philips is away this week. I am going to replace her.",
    user: "Hettie Marshall",
    time: "2 hours ago",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    message: "Bring your books! We will read the next 2 chapters.",
    user: "Hettie Marshall",
    time: "3 hours ago",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export default function Announcements() {
  return (
    <div className="bg-[#1D2A42] h-96 text-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">2 Announcements</h2>
      {announcements.map((announcement, index) => (
        <div key={index} className="bg-[#222E50] p-4 rounded-lg mb-3">
          <p className="text-sm">{announcement.message}</p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-3">
              <img
                src={announcement.avatar}
                alt={announcement.user}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-semibold">{announcement.user}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span>{announcement.time}</span>
              <FaEllipsisH className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
