import React from 'react'
import './Try.css'


export default function Calneder1() {
  

  const customDays = [
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    

    

    { day: '১', content: 'march 15', color: 'white' },
    { day: '২', content: 'march 16', color: 'white' },
    { day: '৩', content: 'march 17', color: 'red' },

    { day: '৪', content: 'march 18', color: 'white' },
    { day: '৫', content: 'march 19', color: 'white' },
    { day: '৬', content: 'march 20', color: 'white' },
    { day: '৭', content: 'march 21', color: 'white' },
    { day: '৮', content: 'march 22', color: 'white' },
    { day: '৯', content: 'march 23', color: 'white' },
    { day: '১০', content: 'march 24', color: 'red' },
    { day: '১১', content: 'march 25', color: 'white' },
    { day: '১২', content: 'march 26', color: 'white' },
    { day: '১৩', content: 'march 27', color: 'white' },
    { day: '১৪', content: 'march 28', color: 'white' },
    { day: '১৫', content: 'march 29', color: 'white' },
    { day: '১৬', content: 'march 30', color: 'white' },
    { day: '১৭', content: 'march 31 ', color: 'red' },
    { day: '১৮', content: 'april 1', color: 'white' },
    { day: '১৯', content: 'april 2', color: 'white' },
    { day: '২০', content: 'april 3', color: 'white' },
    { day: '২১', content: 'april 4', color: 'white' },
    { day: '২২', content: 'april 5', color: 'white' },
    { day: '২৩', content: 'april 6', color: 'white' },
    { day: '২৪', content: 'april 7', color: 'red' },
    { day: '২৫', content: 'april 8', color: 'white' },
    { day: '২৬', content: 'april 9', color: 'white' },
    { day: '২৭', content: 'april 10', color: 'white' },
    { day: '২৮', content: 'april 11', color: 'white' },
    { day: '২৯', content: 'april 12', color: 'white' },
    { day: '৩০', content: 'april 13', color: 'white' },
 


    // ... Add more days as needed
  ];
  
  

  return (
   <>
               <div>
     

               <div className="month"
    style={{
    backgroundImage: `url(${require('./Asset/deep.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
       <ul>
       
         <li>
         চ’ত  (march-april)<br />
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
