import React, { useState } from "react";

const events = [
  {
    date: "01",
    month: "JAN",
    image: "https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?b=1&s=612x612&w=0&k=20&c=MmbIgKebz8Y8JOJExdvLNemFhQNdBzTsgpYUBbZ6Fuc=",
    title: "Music in the Park: Summer Concert Series",
    location: "Central Park, New York City, United States",
    dateTime: "Sunday, January 01, 2023 · 06:00 PM",
    price: "$99.99",
    organizer: "World Fusion Events",
    attendees: 1000,
  },
  {
    date: "15",
    month: "FEB",
    image: "https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?b=1&s=612x612&w=0&k=20&c=MmbIgKebz8Y8JOJExdvLNemFhQNdBzTsgpYUBbZ6Fuc=",
    title: "Rock Night Festival",
    location: "Madison Square Garden, New York",
    dateTime: "Saturday, February 15, 2023 · 08:00 PM",
    price: "$79.99",
    organizer: "Live Nation",
    attendees: 800,
  },
];

const getRandomAvatars = (count) => {
  const avatars = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1525134479668-1bee5c7cbf37?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  ];
  return avatars.slice(0, Math.min(count, avatars.length));
};

const EventCard = ({ event }) => {
  const [liked, setLiked] = useState(false);
  const avatarCount = Math.min(3, event.attendees);
  const extraAttendees = event.attendees - avatarCount;
  const avatarImages = getRandomAvatars(avatarCount);

  return (
    <div className="border rounded-2xl p-4 shadow-lg bg-white w-full transform transition duration-300">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="rounded-lg w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-md shadow-md">
          <p className="text-black font-bold text-lg">{event.date}</p>
          <p className="text-red-500 text-sm font-semibold">{event.month}</p>
        </div>
        {/* Clickable Heart Icon */}
        <div className="absolute top-3 right-3 bg-blue-300 p-2 rounded-sm cursor-pointer " onClick={() => setLiked(!liked)}>
          {liked ? "❤️" : "🤍"}
        </div>
        {/* Dynamic Avatar Group */}
        <div className="absolute bottom-3 left-3 flex -space-x-2">
          {avatarImages.map((src, index) => (
            <img
              key={index}
              className="inline-block size-7 rounded-full ring-2 ring-white"
              src={src}
              alt="Avatar"
            />
          ))}
          {extraAttendees > 0 && (
            <div className="inline-flex items-center justify-center size-7 rounded-full bg-gray-100 border-2 border-white font-medium text-gray-700 shadow-2xs align-middle">
              <span className="text-[10px]">+{extraAttendees}</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-sm text-xs">Dance & Music</span>
        <h3 className="font-bold text-lg mt-2">{event.title}</h3>
        <p className="text-gray-600 text-sm flex items-center mt-1">📍 {event.location}</p>
        <p className="text-gray-600 text-sm flex items-center mt-1">📅 {event.dateTime}</p>
        <p className="text-gray-600 text-sm flex items-center mt-1">💰 From {event.price}</p>
        <p className="text-gray-800 font-semibold text-sm mt-2">By {event.organizer}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Buy Tickets</button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">View Details</button>
      </div>
    </div>
  );
};

const EventGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
