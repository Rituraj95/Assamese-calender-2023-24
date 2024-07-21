import React, { useState } from 'react';
import './Try.css';

export default function Calendar1() {
  const [selectedDate, setSelectedDate] = useState(null);

  const customDays = [
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
 
      { day: '১', content: '15 April', color: 'white', details: 'বহাগ-নতুন বছৰ আৰম্ভ।' },
      { day: '২', content: '16 April', color: 'red', details: 'গোসাঁই বিহু।' },
      { day: '৩', content: '17 April', color: 'white', details: 'তাতৰ বিহু।' },
      { day: '৪', content: '18 April', color: 'white', details: 'ৰঙিয়াত তিনিদিনীয়া ধন্বন্তৰী পূজা।' },
      { day: '৫', content: '19 April', color: 'white', details: 'দহকনীয়াত মহামায়া পূজা।' },
      { day: '৬', content: '20 April', color: 'white', details: 'পূর্ণগ্রাস সূৰ্য্যগ্রহণ, ভাৰতত অদৃশ্য।' },
      { day: '৭', content: '21 April', color: 'white', details: 'খামাৰপাৰ গাৱঁত শ্রীশ্রীলক্ষ্মী নাৰায়ণ মন্দিৰৰ প্ৰতিষ্ঠা দিৱস।' },
      { day: '৮', content: '22 April', color: 'white', details: 'পলাশবাৰীত সুৱেৰী উৎসৱ।' },
      { day: '৯', content: '23 April', color: 'red', details: 'অক্ষয় তৃতীয়া।' },
      { day: '১০', content: '24 April', color: 'white', details: 'Details for 24 April...' },
      { day: '১১', content: '25 April', color: 'white', details: 'ভবানীপুৰ কালজাৰ সত্ৰ আদি ঠাইত গোপাল আতাৰ তিঃতিঃ।' },
      { day: '১২', content: '26 April', color: 'white', details: 'ঘোঁৰামাৰাৰ দৌল উৎসৱ।' },
      { day: '১৩', content: '27 April', color: 'white', details: 'দেৱানগাওঁ গোৱালপাৰাত শ্রীশ্রী মহাৰাণী পূজা উৎসব।' },
      { day: '১৪', content: '28 April', color: 'white', details: 'মায়ামৰা বিষ্ণুবালিকুছি আৰু নাহৰখাট সত্ৰত শ্রীঅনিৰূদ্ধ দেৱৰ জন্ম দিবস।' },
      { day: '১৫', content: '29 April', color: 'white', details: 'শ্ৰীশ্ৰীসীতা নবমী ব্রত।' },
      { day: '১৬', content: '30 April', color: 'red', details: 'মানিকপুৰ সত্ৰত শ্রীশ্ৰী গোবিন্দ ভবন গীতাশ্রম প্রতিষ্ঠা দিবস।' },
      { day: '১৭', content: '1 May', color: 'white', details: 'মে\' দিবস (শ্রমিক ৫৩ দিবস)।' },
      { day: '১৮', content: '2 May', color: 'white', details: 'দৰংগিৰি দিননাথ শান্তি আশ্ৰমৰ প্রতিষ্ঠাতা শ্রীমৎ প্রেমানন্দ ব্রহ্মচাৰীৰ তিঃতিঃ।' },
      { day: '১৯', content: '3 May', color: 'white', details: 'বালিকুছিৰ সুভা।' },
      { day: '২০', content: '4 May', color: 'white', details: 'নলবাৰী নপ্তিপাৰাৰ সমাজ সেবক যতীন্দ্ৰ নাথ গোস্বামীৰ তিঃতিঃ।' },
      { day: '২১', content: '5 May', color: 'white', details: 'বুদ্ধপূর্ণিমা।' },
      { day: '২২', content: '6 May', color: 'white', details: 'মঙ্গলদৈ বামুন পাৰা শিব মন্দিৰত দৌল উৎসৱ।' },
      { day: '২৩', content: '7 May', color: 'red', details: 'Details for 7 May...' },
      { day: '২৪', content: '8 May', color: 'white', details: 'Details for 8 May...' },
      { day: '২৫', content: '9 May', color: 'white', details: 'বিশ্ব কবি ৰবীন্দ্ৰ নাথ ঠাকুৰৰ জন্মোৎসৱ।' },
      { day: '২৬', content: '10 May', color: 'white', details: 'গড়ল গাৱঁৰ ভট্টাপাৰাত ৰাণীচাপৰি মা মনসা মন্দিৰত ৫ দিনীয়া মনসা পূজা।' },
      { day: '২৭', content: '11 May', color: 'white', details: 'মহাপুৰুষ শঙ্কৰদেব বংশৰ শ্রীশ্ৰীকোৱামাৰা সত্ৰৰ জীৱকৃষ্ণ দেব মহন্ত।' },
      { day: '২৮', content: '12 May', color: 'white', details: 'Details for 12 May...' },
      { day: '২৯', content: '13 May', color: 'white', details: 'ৰাষ্ট্ৰীয় ঐক্য দিবস।' },
      { day: '৩০', content: '14 May', color: 'red', details: 'পশ্চিম চামতা গোপূজাস্থানত ভঠেলী উৎসৱ।' },
      { day: '৩১', content: '15 May', color: 'white', details: 'শ্ৰীশ্ৰীসত্যনাৰায়ন ব্রত।' }
    
    

    
  ];

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <>
      <div>
        <div
          className="month"
          style={{
            backgroundImage: `url(${require('./Asset/bohagg.jpg')})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <ul>
            <li>
              বহাগ (April-May)<br />
              <span style={{ fontSize: '18px' }}>2023-24</span>
            </li>
          </ul>
        </div>

        {selectedDate && (
  <div className="date-details">
    <h2>Details for {selectedDate.content}</h2>
    <p>{selectedDate.details}</p>
    <button onClick={() => setSelectedDate(null)}>Close</button>
  </div>
)}

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
          {customDays.map(({ day, content, color, details }) => (
            <li key={day} style={{ backgroundColor: color }} onClick={() => handleDateClick({ content, details })}>
              {day}
              <div>{content}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className='content'>
        <ul>
          <li>১বহাগ-নতুন বছৰ আৰম্ভ। ...</li>
          <li>২-গোসাঁই বিহু। ...</li>
          <li>৩-তাতৰ বিহু। ...</li>
          <li>৪ ৰঙিয়াত তিনিদিনীয়া ধন্বন্তৰী পূজা। ...</li>
          <li>৫-দহকনীয়াত মহামায়া পূজা। ...</li>
          <li>৬-পূর্ণগ্রাস সূৰ্য্যগ্রহণ, ভাৰতত অদৃশ্য। ...</li>
          <li>৭-খামাৰপাৰ গাৱঁত শ্রীশ্রীলক্ষ্মী নাৰায়ণ মন্দিৰৰ প্ৰতিষ্ঠা দিৱস। ...</li>
          <li>৮-পলাশবাৰীত সুৱেৰী উৎসৱ। ...</li>
          <li>৯-অক্ষয় তৃতীয়া। ...</li>
          <li>১১-ভবানীপুৰ কালজাৰ সত্ৰ আদি ঠাইত গোপাল আতাৰ তিঃতিঃ। ...</li>
          <li>১২-ঘোঁৰামাৰাৰ দৌল উৎসৱ। ...</li>
          <li>১৩-দেৱানগাওঁ গোৱালপাৰাত শ্রীশ্রী মহাৰাণী পূজা উৎসব। ...</li>
          <li>১৪-মায়ামৰা বিষ্ণুবালিকুছি আৰু নাহৰখাট সত্ৰত শ্রীঅনিৰূদ্ধ দেৱৰ জন্ম দিবস। ...</li>
          <li>১৫-শ্ৰীশ্ৰীসীতা নবমী ব্রত। ...</li>
          <li>১৬-মানিকপুৰ সত্ৰত শ্রীশ্রী গোবিন্দ ভবন গীতাশ্রম প্রতিষ্ঠা দিবস। ...</li>
          <li>১৭-মে' দিবস (শ্রমিক ৫৩ দিবস)। ...</li>
          <li>১৮-দৰংগিৰি দিননাথ শান্তি আশ্ৰমৰ প্রতিষ্ঠাতা শ্রীমৎ প্রেমানন্দ ব্রহ্মচাৰীৰ তিঃতিঃ। ...</li>
          <li>১৯-বালিকুছিৰ সুভা। ...</li>
          <li>২০- নলবাৰী নপ্তিপাৰাৰ সমাজ সেবক যতীন্দ্ৰ নাথ গোস্বামীৰ তিঃতিঃ। ...</li>
          <li>২১-বুদ্ধপূর্ণিমা। ...</li>
          <li>২২-মঙ্গলদৈ বামুন পাৰা শিব মন্দিৰত দৌল উৎসৱ। ...</li>
          <li>২৫- বিশ্ব কবি ৰবীন্দ্ৰ নাথ ঠাকুৰৰ জন্মোৎসৱ। ...</li>
          <li>২৬-গড়ল গাৱঁৰ ভট্টাপাৰাত ৰাণীচাপৰি মা মনসা মন্দিৰত ৫ দিনীয়া মনসা পূজা। ...</li>
          <li>২৭-মহাপুৰুষ শঙ্কৰদেব বংশৰ শ্রীশ্ৰীকোৱামাৰা সত্ৰৰ জীৱকৃষ্ণ দেব মহন্ত, ...</li>
          <li>২৯-ৰাষ্ট্ৰীয় ঐক্য দিবস। ...</li>
          <li>৩০-পশ্চিম চামতা গোপূজাস্থানত ভঠেলী উৎসৱ। ...</li>
          <li>৩১-শ্ৰীশ্ৰীসত্যনাৰায়ন ব্রত। ...</li>
        </ul>
      </div>
    </>
  );
}
