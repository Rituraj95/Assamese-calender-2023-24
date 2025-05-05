import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';
import useBohagStore from '../../store/bohagStore';
import useJethStore from '../../store/jethStore';
import useAharStore from '../../store/aaharStore';
import useXaonStore from '../../store/xaonStore';

const MonthSidebar = () => {
    const location = useLocation();

    // Get both stores at the top level (following Hook rules)
    const bohagDays = useBohagStore((state) => state.customDays);
    const jethDays = useJethStore((state) => state.customDays);
    const aaharDays= useAharStore((state)=>state.customDays);
    const xaonDays= useXaonStore((state)=>state.customDays);

    // Select data based on route
    const getDays = () => {
        const path = location.pathname.toLowerCase();
        if (path.includes('/jeth')) {
            return jethDays;
        }
        if (path.includes('/aahar')) {
            return aaharDays;
        }
        if (path.includes('/xaon')) {
            return xaonDays;
        }

        return bohagDays; // default
    };

    const customDays = getDays();
    const events = customDays.filter(day => day.details && day.details.trim() !== '');

    return (
        <div className="month-sidebar">
            <h3 className="sidebar-title">মাহৰ উল্লেখযোগ্য ঘটনা</h3>
            <div className="month-events">
                {events.map((event, index) => (
                    <div className="event-item" key={`${event.day}-${index}`}>
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