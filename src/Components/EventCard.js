import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-gray-400 mt-2">{event.time}</p>
      <p className="text-gray-400">Conducted by: {event.faculties.join(', ')}</p>
    </div>
  );
};

export default EventCard;
