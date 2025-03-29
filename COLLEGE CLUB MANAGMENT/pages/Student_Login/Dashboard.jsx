// eslint-disable-next-line no-unused-vars
import React from "react";
import NavbarSimple from "./StudNav";
import UpcomingEvents from "./UpcomingEvents";
import Announcements from "./Annoucment";

export default function Dashboard() {
  const joinedClubs = [
    {
      name: "Photography Club",
      image: "https://via.placeholder.com/200", // Increased image size
      role: "Member",
    },
    {
      name: "Coding Club",
      image: "https://via.placeholder.com/200",
      role: "Admin",
    },
    {
      name: "Debate Society",
      image: "https://via.placeholder.com/200",
      role: "Moderator",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <NavbarSimple />

      {/* Main Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* 🔹 Joined Clubs Section - Now Wider */}
        <div className="bg-white p-4 rounded-xl shadow-md md:col-span-2 relative">
          {/* 🔹 "My All Clubs" Link at Top Right */}
          <a
            href="/all-clubs"
            className="absolute top-4 right-4 text-blue-600 text-sm font-medium hover:underline"
          >
            My All Clubs
          </a>

          <h2 className="text-xl font-semibold mb-4">Joined Clubs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {joinedClubs.map((club, index) => (
              <div
                key={index}
                className="relative bg-gray-200 rounded-lg shadow overflow-hidden"
              >
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-52 object-cover" // Increased height to h-52
                />

                {/* Role Badge at Top Right */}
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {club.role}
                </div>

                {/* Club Name at Bottom Left */}
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-2 rounded-lg">
                  <p className="text-sm font-semibold">{club.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Calendar Section */}
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          <div className="h-40 w-full flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Calendar Coming Soon</p>
          </div>
        </div>

        {/* 🔹 Upcoming Events Section */}
        <div className="bg-white p-4 rounded-xl shadow-md overflow-y-auto max-h-[400px] md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            {/* 🔹 Section Title */}
            <h2 className="text-xl font-semibold">Upcoming Events</h2>
            <a
              href="/all-events"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              All Events
            </a>
          </div>
          <UpcomingEvents />
        </div>

        {/* 🔹 Announcements Section */}
        <div className="bg-white p-0 h-24 rounded-xl shadow-md">
          <Announcements />
        </div>
      </div>
    </div>
  );
}
