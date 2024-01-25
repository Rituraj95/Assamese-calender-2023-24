import React from 'react';
import './Try.css';

const Calendar = () => {
  const customDays = [
    { day: '১', content: 'Event 1', color: 'white' },
    { day: '২', content: 'Event 2', color: 'white' },
    { day: '৩', content: 'Event 2', color: 'white' },

    { day: '৪', content: 'Event 2', color: 'white' },
    { day: '৫', content: 'Event 2', color: 'white' },
    { day: '৬', content: 'Event 2', color: 'white' },
    { day: '৭', content: 'Event 2', color: 'white' },
    { day: '৮', content: 'Event 2', color: 'white' },
    { day: '৯', content: 'Event 2', color: 'white' },
    { day: '১০', content: 'Event 2', color: 'white' },
    { day: '১১', content: 'Event 2', color: 'white' },
    { day: '১২', content: 'Event 2', color: 'white' },
    { day: '১৩', content: 'Event 2', color: 'white' },
    { day: '১৪', content: 'Event 2', color: 'white' },
    { day: '১৫', content: 'Event 2', color: 'white' },
    { day: '১৬', content: 'Event 2', color: 'white' },
    { day: '১৭', content: 'Event 2', color: 'white' },
    { day: '১৮', content: 'Event 2', color: 'white' },
    { day: '১৯', content: 'Event 2', color: 'white' },
    { day: '২০', content: 'Event 2', color: 'white' },
    { day: '২১', content: 'Event 2', color: 'white' },
    { day: '২২', content: 'Event 2', color: 'white' },
    { day: '২৩', content: 'Event 2', color: 'white' },
    { day: '২৪', content: 'Event 2', color: 'white' },
    { day: '২৫', content: 'Event 2', color: 'white' },
    { day: '২৬', content: 'Event 2', color: 'white' },
    { day: '২৭', content: 'Event 2', color: 'white' },
    { day: '২৮', content: 'Event 2', color: 'white' },
    { day: '২৯', content: 'Event 2', color: 'white' },
    { day: '৩০', content: 'Event 2', color: 'white' },
    { day: '৩১', content: 'Event 2', color: 'white' },


  ];


  

  return (
    <div>
     

      <div className="month">
        <ul>
          <li className="prev">&#10094;</li>
          <li className="next">&#10095;</li>
          <li>
            বহাগ<br />
            <span style={{ fontSize: '18px' }}>২০২৩-২৪</span>
          </li>
        </ul>
      </div>

      <ul className="weekdays">
        <li>দেওবাৰ</li>
        <li>সোমবাৰ</li>
        <li>মঙলবাৰ</li>
        <li>বুধবাৰ</li>
        <li>বৃহস্পতিবাৰ</li>
        <li>শুকুৰবাৰ</li>
        <li>শনিবাৰ</li>

      
      </ul>

      <ul className="days">
        {customDays.map(({ day, content, color }) => (
          <li key={day} style={{ backgroundColor: color }}>
            {day}
            <div>{content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
