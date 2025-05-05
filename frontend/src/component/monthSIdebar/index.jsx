import React from 'react';
import './index.css';
import useCalendarStore from '../store/bohagStore'; // adjust the path as needed

const MonthSidebar = () => {
    // Get customDays from Zustand store
    const customDays = useCalendarStore((state) => state.customDays);

    // Filter out days with empty content (your placeholder empty days)
    const events = customDays.filter(day => day.details && day.details.trim() !== '');

    return (
        <div className="month-sidebar">
            <h3 className="sidebar-title">মাহৰ উল্লেখযোগ্য ঘটনা</h3>

            <div className="month-events">
                {events.map((event, index) => (
                    <div className="event-item" key={index}>
                        <div className="event-date">{event.day}</div>
                        <div className="event-details">
                            {event.details}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonthSidebar;