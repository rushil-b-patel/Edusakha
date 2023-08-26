import React, { useState } from "react";
import EventCard from "./EventCard";
import EventCreationForm from "./EventCreationForm";

const Event = ({ userType }) => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const [showCreateForm, setShowCreateForm] = useState(false);
  
  const handleCreateEventClick = () => {
    setShowCreateForm((prevShowCreateForm) => !prevShowCreateForm);
  };

  const sampleEvent = {
    id: 1,
    title: "Sample Event",
    description: "This is a sample event description.",
    time: "2023-08-25 10:00 AM",
    faculties: ["Faculty A", "Faculty B"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEventCreation = async (newEvent) => {
    // TODO: Send newEvent to the server to create the event
    // After the event is created, update the events list accordingly
    console.log("Creating event:", newEvent);

    // For now, let's just close the form
    setShowCreateForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Perform API call to send eventData to the server
    console.log("Event Data:", eventData);
  };

  const [activeSection, setActiveSection] = useState("registered");

  const registeredEvents = [
    { id: 1, title: "Event 1" },
    { id: 2, title: "Event 2" },
    // ... more registered events
  ];

  const ongoingEvents = [
    { id: 1, title: "Ongoing Event 1" },
    { id: 2, title: "Ongoing Event 2" },
    // ... more ongoing events
  ];

  const upcomingEvents = [
    { id: 1, title: "Upcoming Event 1" },
    { id: 2, title: "Upcoming Event 2" },
    // ... more upcoming events
  ];

  const pastEvents = [
    { id: 1, title: "Past Event 1" },
    { id: 2, title: "Past Event 2" },
    // ... more past events
  ];

  return (
    <div className="max-w-md mx-auto my-10 p-4 bg-white rounded-lg shadow-lg">
      {userType === "student" ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Your Events
          </h2>
          <div className="mb-4 flex justify-center space-x-4">
            <button
              onClick={() => setActiveSection("past")}
              className={`${
                activeSection === "past" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "past" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Past
            </button>
            <button
              onClick={() => setActiveSection("registered")}
              className={`${
                activeSection === "registered" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "registered"
                  ? ""
                  : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Registered
            </button>
            <button
              onClick={() => setActiveSection("upcoming")}
              className={`${
                activeSection === "upcoming" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "upcoming"
                  ? ""
                  : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Upcoming
            </button>
          </div>

          {activeSection === "registered" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Registered Events</h3>
              <ul>
                {registeredEvents.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
              <EventCard event={sampleEvent} />
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
          <div>
          <button
            onClick={handleCreateEventClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ease-in duration-300"
          >
            Create Event
          </button>
          {showCreateForm && (
            <EventCreationForm onCreateEvent={handleEventCreation} />
          )}
        </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Your Events
          </h2>
          <div className="mb-4 flex justify-center space-x-4">
            <button
              onClick={() => setActiveSection("past")}
              className={`${
                activeSection === "past" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "past" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-200`}
            >
              Past
            </button>
            <button
              onClick={() => setActiveSection("upcoming")}
              className={`${
                activeSection === "upcoming" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "upcoming"
                  ? ""
                  : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveSection("ongoing")}
              className={`${
                activeSection === "ongoing" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "ongoing"
                  ? ""
                  : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Ongoing
            </button>
          </div>
          {activeSection === "ongoing" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Events</h3>
              <ul>
                {ongoingEvents.map((event) => (
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
