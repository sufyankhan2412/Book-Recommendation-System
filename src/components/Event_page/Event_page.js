import React from "react";
import { Link } from "react-router-dom";
import "./Event_page.css";

const events = [
  {
    title: "Tech Seminar",
    date: "Feb 20, 2025",
    location: "Auditorium Hall",
  },
  {
    title: "Cultural Fest",
    date: "March 5, 2025",
    location: "Open Grounds",
  },
  {
    title: "Sports Meet",
    date: "April 12, 2025",
    location: "Main Stadium",
  },
];

const EventsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">College Events</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="event-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600"> {event.date}</p>
              <p className="text-gray-600"> {event.location}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-6">
        &copy; {new Date().getFullYear()} College Alert System. All rights reserved.
      </footer>
    </div>
  );
};

export default EventsPage;
