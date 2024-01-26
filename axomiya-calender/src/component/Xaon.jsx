import React from 'react'

export default function Calneder1() {
  const customDays = [
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },

    { day: '১', content: '15 april', color: 'white' },
    { day: '২', content: 'april 16', color: 'white' },
    { day: '৩', content: 'april 17', color: 'white' },

    { day: '৪', content: 'april 18', color: 'white' },
    { day: '৫', content: 'april 19', color: 'white' },
    { day: '৬', content: 'april 20', color: 'white' },
    { day: '৭', content: 'april 21', color: 'white' },
    { day: '৮', content: 'april 22', color: 'white' },
    { day: '৯', content: 'april 23', color: 'white' },
    { day: '১০', content: 'april 24', color: 'white' },
    { day: '১১', content: 'april 25', color: 'white' },
    { day: '১২', content: 'april 26', color: 'white' },
    { day: '১৩', content: 'april 27', color: 'white' },
    { day: '১৪', content: 'april 28', color: 'white' },
    { day: '১৫', content: 'april 29', color: 'white' },
    { day: '১৬', content: 'april 30', color: 'white' },
    { day: '১৭', content: 'may 1 ', color: 'white' },
    { day: '১৮', content: 'may 2', color: 'white' },
    { day: '১৯', content: 'may 3', color: 'white' },
    { day: '২০', content: 'may 4', color: 'white' },
    { day: '২১', content: 'may 5', color: 'white' },
    { day: '২২', content: 'may 6', color: 'white' },
    { day: '২৩', content: 'may 7', color: 'white' },
    { day: '২৪', content: 'may 8', color: 'white' },
    { day: '২৫', content: 'may 9', color: 'white' },
    { day: '২৬', content: 'may 10', color: 'white' },
    { day: '২৭', content: 'may 11', color: 'white' },
    { day: '২৮', content: 'may 12', color: 'white' },
    { day: '২৯', content: 'may 13', color: 'white' },
    { day: '৩০', content: 'may 14', color: 'white' },
    { day: '৩১', content: 'may 15', color: 'white' },


    // ... Add more days as needed
  ];
  return (

    <>
          <div>
     
          <div className="month"
    style={{
    backgroundImage: `url(${require('./Asset/kheti.png')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
    
       <ul>
    
         <li>
         শাওণ (April-May)<br />
           <span style={{ fontSize: '18px' }}>2023-24</span>
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
    
    
    
    </>
   


  )
}
