import React from 'react'

export default function Calneder1() {
  const customDays = [
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
 

 

    { day: '১', content: 'july 18', color: 'white' },
    { day: '২', content: 'july 19', color: 'white' },
    { day: '৩', content: 'july 20', color: 'white' },

    { day: '৪', content: 'july 21', color: 'white' },
    { day: '৫', content: 'july 22', color: 'white' },
    { day: '৬', content: 'july 23', color: 'red' },
    { day: '৭', content: 'july 24', color: 'white' },
    { day: '৮', content: 'july 25', color: 'white' },
    { day: '৯', content: 'july 26', color: 'white' },
    { day: '১০', content: 'july 27', color: 'white' },
    { day: '১১', content: 'july 28', color: 'white' },
    { day: '১২', content: 'july 29', color: 'white' },
    { day: '১৩', content: 'july 30', color: 'red' },
    { day: '১৪', content: 'july 31', color: 'white' },
    { day: '১৫', content: 'august 1', color: 'white' },
    { day: '১৬', content: 'august 2', color: 'white' },
    { day: '১৭', content: 'august 2 ', color: 'white' },
    { day: '১৮', content: 'august 3', color: 'white' },
    { day: '১৯', content: 'august 4', color: 'white' },
    { day: '২০', content: 'august 5', color: 'red' },
    { day: '২১', content: 'august 6', color: 'white' },
    { day: '২২', content: 'august 7', color: 'white' },
    { day: '২৩', content: 'august 8', color: 'white' },
    { day: '২৪', content: 'august 9', color: 'white' },
    { day: '২৫', content: 'august 11', color: 'white' },
    { day: '২৬', content: 'august 12', color: 'white' },
    { day: '২৭', content: 'august 13', color: 'red' },
    { day: '২৮', content: 'august 14', color: 'white' },
    { day: '২৯', content: 'august 15', color: 'white' },
    { day: '৩০', content: 'august 18', color: 'white' },
    { day: '৩১', content: 'august 17', color: 'white' },
    { day: '৩২', content: 'august 18', color: 'white' },



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
         শাওণ (july-august)<br />
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
