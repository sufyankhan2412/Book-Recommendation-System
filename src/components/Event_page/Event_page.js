import React, { useState } from "react";
import "./Event_page.css"; // Import styles

const eventsData = [
    
  {
    id: 1,
    title: "Top Writing Jobs Today",
    date: "Jul 1, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Manhattan Club, New York, NY, USA",
    price: "$420",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Writers' Guide 2025",
    date: "Aug 1, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Manhattan Club, New York, NY, USA",
    price: "$300",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Writing Masterclass",
    date: "Nov 1, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Manhattan Club, New York, NY, USA",
    price: "$400",
    image: "https://via.placeholder.com/150",
  },
];

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Banner Section */}
      <div className="relative w-full h-64">
        <img
          src="https://via.placeholder.com/1920x400" // Replace with a real banner image URL
          alt="Upcoming Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-5xl font-extrabold">📅 Upcoming Events</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center py-6">
        <input
          type="text"
          placeholder="Search for events..."
          className="w-80 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-blue-600 px-6 py-2 text-white font-bold rounded-r-md hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/* Event List */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-3/4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center border-b pb-4 mb-4 bg-gray-100 rounded-md shadow-md p-4"
            >
              {/* Date Box */}
              <div className="w-16 h-16 bg-blue-600 text-white flex flex-col items-center justify-center text-lg font-bold rounded-md shadow">
                <span>{event.date.split(" ")[1]}</span>
                <span className="text-xl">{event.date.split(" ")[0]}</span>
              </div>
              
              {/* Event Details */}
              <div className="flex-1 ml-6">
                <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
                <p className="text-gray-600 text-sm">{event.location}</p>
                <p className="text-gray-500 text-xs">{event.time}</p>
                <p className="text-green-600 font-bold text-lg">{event.price}</p>
              </div>
              
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-20 h-20 object-cover rounded-lg shadow"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
