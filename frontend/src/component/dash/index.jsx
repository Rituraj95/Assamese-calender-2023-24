import React, { useState } from 'react';
import './App.css';

function CalendarApp() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showZeroQuantity, setShowZeroQuantity] = useState(false);

    // Mock data for calendar events
    const [events, setEvents] = useState([
        { id: 1, title: 'Team Meeting', date: '2023-05-15', time: '10:00', attendees: 5 },
        { id: 2, title: 'Doctor Appointment', date: '2023-05-16', time: '14:30', attendees: 1 },
        { id: 3, title: 'Project Deadline', date: '2023-05-20', time: '18:00', attendees: 0 },
    ]);

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app-container">
            <div className="header-section">
                <h1>Calendar Events</h1>
                <div className="search-filter">
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>Filter</button>
                    <button>Sort</button>
                </div>
            </div>

            <div className="stats-section">
                <div className="stat-card">
                    <h3>VIEW BY</h3>
                    <p>Day | Week | Month</p>
                </div>

                <div className="stat-card">
                    <h3>{events.length}</h3>
                    <p>Total Events</p>
                </div>

                <div className="stat-card">
                    <h3>Add Event</h3>
                </div>
            </div>

            <div className="action-section">
                <button className="action-button">Create New (F2)</button>
                <button className="action-button">Settings (F4)</button>
            </div>

            <div className="status-section">
                <div className="status-card">
                    <h3>STATUS</h3>
                    <p>Loading Calendar...</p>
                </div>

                <div className="status-card">
                    <h3>TODAY</h3>
                    <p>VIEW DAY</p>
                </div>

                <div className="status-card">
                    <h3>UPCOMING</h3>
                    <p>VIEW WEEK</p>
                </div>
            </div>

            <div className="toggle-section">
                <label>
                    <input
                        type="checkbox"
                        checked={showZeroQuantity}
                        onChange={() => setShowZeroQuantity(!showZeroQuantity)}
                    />
                    Show Past Events
                </label>
                <p>We've got plenty of space for your events, we promise!</p>
            </div>

            <div className="events-list">
                {filteredEvents.map(event => (
                    <div key={event.id} className="event-card">
                        <h4>{event.title}</h4>
                        <p>Date: {event.date} at {event.time}</p>
                        <p>Attendees: {event.attendees}</p>
                    </div>
                ))}
            </div>

            <div className="footer-section">
                <p>Create New - F2 | Settings - F4</p>
            </div>
        </div>
    );
}

export default CalendarApp;