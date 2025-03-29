import React, { useState } from "react";

const EventTicket = ({ event }) => {
  const [ticketInfo] = useState(event || {});

  return (
    <div className="bg-blue-500 text-white p-5 w-80 rounded-2xl ml-20 shadow-lg relative overflow-hidden">
      {/* Event Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={ticketInfo.image || "default-image-url"}
          alt="Event"
          className="w-full h-40 object-cover"
        />
      </div>
      
      {/* Event Details */}
      <div className="mt-3">
        <p className="text-sm">{ticketInfo.presenter || "Unknown Presenter"}</p>
        <h2 className="text-xl font-bold">{ticketInfo.title || "Event Title"}</h2>
      </div>

      {/* Date & Time */}
      <div className="mt-2 flex justify-between text-sm">
        <div>
          <p className="font-semibold">Date</p>
          <p>{ticketInfo.date || "N/A"}</p>
        </div>
        <div>
          <p className="font-semibold">Time</p>
          <p>{ticketInfo.time || "N/A"}</p>
        </div>
      </div>

      {/* Check-In & Order ID */}
      <div className="mt-2 flex justify-between text-sm">
        <div>
          <p className="font-semibold">Check In Type</p>
          <p>{ticketInfo.checkInType || "N/A"}</p>
        </div>
        <div>
          <p className="font-semibold">Order ID</p>
          <p>{ticketInfo.orderId || "N/A"}</p>
        </div>
      </div>

      {/* Location */}
      <div className="mt-3 text-sm">
        <p className="font-semibold">Place</p>
        <p>{ticketInfo.place || "Location not available"}</p>
      </div>

      {/* Dashed Line with Semicircular Cuts */}
      <div className="relative mt-4  flex items-center">
        <div className="w-8 h-8 bg-white rounded-full absolute -left-8.5 -top-4"></div>
        <div className="flex-1 ml-2 mr-2 border-t-2 border-dashed border-white"></div>
        <div className="w-8 h-8 bg-white rounded-full absolute -right-8.5 -top-4"></div>
      </div>

      {/* Barcode */}
      <div className="mt-4 flex justify-center">
        <img
          src={ticketInfo.barcode || "default-barcode-url"}
          alt="Barcode"
          className="w-64 h-12 object-cover"
        />
      </div>
    </div>
  );
};

export default EventTicket;
