import React, { useState } from "react";

const Event = ({ userType = "professor" }) => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Perform API call to send eventData to the server
    console.log("Event Data:", eventData);
  };

  const [activeSection, setActiveSection] = useState("registered");

  const registeredEvents = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    // ... more registered events
  ];

  const ongoingEvents = [
    { id: 1, title: 'Ongoing Event 1' },
    { id: 2, title: 'Ongoing Event 2' },
    // ... more ongoing events
  ];

  const upcomingEvents = [
    { id: 1, title: 'Upcoming Event 1' },
    { id: 2, title: 'Upcoming Event 2' },
    // ... more upcoming events
  ];

  const pastEvents = [
    { id: 1, title: 'Past Event 1' },
    { id: 2, title: 'Past Event 2' },
    // ... more past events
  ];

  return (
    <div className="max-w-md mx-auto my-10 p-4 bg-white rounded-lg shadow-lg">
      {userType === "student" ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Your Events
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Event Type:
            </label>
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="registered">Registered Events</option>
              <option value="past">Past Events</option>
              <option value="upcoming">Upcoming Events</option>
            </select>
          </div>
          {activeSection === "registered" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Registered Events</h3>
              <ul>
                {registeredEvents.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "upcoming" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
              <ul>
                {upcomingEvents.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "past" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Past Participated Events
              </h3>
              <ul>
                {pastEvents.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Your Events</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Event Type:
            </label>
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="ongoing">Ongoing Events</option>
              <option value="past">Past Events</option>
              <option value="upcoming">Upcoming Events</option>
            </select>
          </div>
          {activeSection === 'ongoing' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Events</h3>
              <ul>
                {ongoingEvents.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === 'upcoming' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
              <ul>
                {upcomingEvents.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === 'past' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Past Events</h3>
              <ul>
                {pastEvents.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Event;
