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
    backgroundImage: `url(${require('./Asset/ambubasi.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
     

   
       <ul>
       
         <li>
         ভাদ (April-May)<br />
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
    

    <ul className='content'>
      <li>
      Bhado
১ শ্রীশ্রীকৃষ্ণৰ জন্মাষ্টমী ব্রত। শিয়ালা বৈষ্ণব দেওমৰনৈ সত্ৰত ভাগবত পাঠ নামপ্রসঙ্গ উৎসব। বিশ্বহিন্দু পৰিষদৰ প্ৰতিষ্ঠা দিৱস। বৰঘোলা, যোগীঘোপা, বঘুনাথপুৰ বৰনগৰত মহাপ্রভু গৰখীয়া গোসাই থান, দেওমৰনৈ শিয়ালা বৈষ্ণব সত্ৰ আৰু খাটৰ গাঁৱৰ (চন্দ্ৰপুৰ) শ্যামৰায় নামঘৰত জন্মাষ্টমী পালন। মৌৰা আৰু বালিসত্র সৎসঙ্গী সত্র, বাৰাংহাটী, বৰবাৰী সত্ৰত, নগাঁওৰ চকলাঘাট খৌৰামোচৰ সত্র, মাজজাজৰী মাজগাঁও বাঘমৰা বজালবাৰী সত্র আৰু দৰং জিলাব কুলশীগেট শ্ৰীশ্ৰীকপিলি গিৰিমুনিৰ শ্ৰীশ্ৰীকপিলি সত্ৰত শ্রীশ্রীকৃষ্ণৰ জন্মাষ্টমী ব্রত পালন। আজিৰ পৰা এমাহ পৰ্য্যন্ত মহাপুৰুষ মাধৱদেব প্রতিষ্ঠিত যোৰহাটৰ ঢেকীয়াখোৱা বৰনামঘৰত আৰু গহপুৰ বেলগুৰী সত্ৰত ঊষা কীৰ্ত্তণ আৰু নাম প্রসঙ্গ আৰম্ভ। ২-নন্দোৎসব। মতান্তৰে শ্ৰীশ্ৰীকৃষ্ণৰ জন্মাষ্টমী ব্রত।৩-সাধু সেবক সম্মিলনৰ প্ৰতিষ্ঠাপক ভক্তিবান্ধব সত্যবাবা, কামরূপ নগাঁও জিলাৰ ৰাইডঙ্গীয়া দীঘলী সত্ৰৰ সত্ৰাধিকাৰ কেশকান্ত দেৱমহন্তৰ তিঃতিঃ। দীঘলকুছি সত্রত নন্দ উৎসব পালন।৪-নরমাটি কাটনিপাৰ সত্ৰত সত্ৰাধিকাৰ ৰামচন্দ্ৰ আৰু বৰপথাৰ মদাৰগুৰি সত্ৰত জীৱকান্ত আতাব তিঃতিঃ ।৫-শুৱালকুছি বৰদধি ধোপবগুৰী বৰ্কা আদি সত্রত লক্ষ্মীকান্ত আতাৰ তিথি উপলক্ষে পালনাম উৎসব। শৰণীয়া কছাৰী জনগোষ্ঠীৰ -বাম্বোলপিটা উৎসব। নলবাৰী খাটাৰবাৰী গাঁওত হবিনাৰায়ণ দত্তবকরা প্রতিষ্ঠিত সৎসঙ্গী মঠত সাতদিনীয়া পালনাম।৬-সুন্দৰদিয়া সত্ৰত পৰশুৰাম ভাগবতীৰ তিঃতিঃ।১২-মহাপুৰুষ শ্রীশ্রী শঙ্কৰদেৱৰ তিৰোভাব তিথি উপলক্ষে কামৰূপৰ দক্ষিণপাৰ পূবমাজিৰ গাঁৱত শিলপোতা সত্ৰ আৰু ৰঙিয়াৰ লেচাকনীয়া সত্রত তিথি মহোৎসব।১৩-দৈপবা, খোলাগাঁও, কোমোৰাণ্ডৰী, বাহতলা সত্ৰত মিছামাৰী সত্ৰসমূহৰ প্রতিষ্ঠাতা কৃষ্ণচন্দ্র বৈৰাগী আৰু পঞ্চবর্তী বাৰপুজীয়া আহতগুৰী সত্রত কুঞ্জলতা গোস্বামীৰ তিঃতিঃ। ১৪-শ্রীশ্রীগণেশ চতুর্থী, শ্রীশ্রীগণেশ পূজা।১৫- জাগবা কৈহাটী মানেৰী বহৰি নপ্তিপাৰা আদি ঠাইত মহাপুৰুষ শ্রীশ্রীহৰিদেৱৰ আবিৰ্ভাৱ তিথি, হৰিদেবাব্দ ৫৯৮ আবস্তু। ১৭-বেঙেনাআটী সত্ৰাধিকাৰ ৰমাকান্ত গোস্বামী, পুখুৰীপাৰ সত্ৰব লক্ষ্মীকান্ত অধিকাৰ, মুহিকান্ত আতা আৰু বুদবাৰী সত্ৰৰ শত্ৰুকৃষ্ণ আৰু শ্রীৰামকীর্ত্তন (অনন্ত ৰামায়ণ) প্রণেতা প্রেমলতাৰ বচয়িতা শঙ্কৰোত্তৰ বৈষ্ণব কবি কালশিলা সত্রব সত্ৰাধিকাৰ আনন্দ আতাৰ তিঃতিঃ। ১৮-শ্রীশ্রীনৰোৱা কুজি সত্ৰৰ দ্বাদশজনা সত্ৰাধিকাৰ শিৱপ্ৰসাদ গোস্বামী ২/ আতাব তিঃতিঃ।১৯-ঠাকুৰ শ্রী অনুকুল চন্দ্ৰৰ আবির্ভাব তিথি। বিশ্বমাতৃ মাদাৰ টেৰেছাব স্মৃতি দিৱস। শিক্ষক দিৱস। ২০-কৰম পূজা। কমলাবাৰী সত্র, বদলা সত্র, ভোগপুৰ সত্ৰ সমূহত বদলাপদ্ম আতাব ৪ দিনীয়া তিথি পালন। বৰদধি সত্ৰত সনাতন আতাৰ তিথি উপলক্ষে পালনাম উৎসব। ২১-নগাঁও নৰোৱা বালিসত্রত বটকৃষ্ণ দেব গোস্বামীৰ তিঃতিঃ। ২২- ■ শুকদ'ল সৰুবৰী শলণ্ডৰী সত্ৰত সত্ৰাধিকাৰ হৰিদেৱ মহন্ত, বৰপথাৰ ৰত্নাকৰ সত্ৰত চন্দ্রগুভা দেৱী গোস্বামীৰ তিঃতিঃ। ২৩-শ্রীশ্রীসত্যনাৰায়ণ ব্রত। শিমলীয়া গাঁৱত সার্ব্বজনীন অনন্ত ১ চতুৰ্দ্দশী পূজা মহোৎসর। ২৪-সনাতন ধর্মপ্রচাৰক বোমহর্ষণৰ জন্মতিথি পালন, আলধৰা ৩ গোবিন্দ আতা, ডিহিংৰ জগবন্দন আতাবুদবাৰী সত্ৰত বিজয়ানন্দ দেব, মায়ামৰা বিষ্ণুবালিকুছিৰ বৈকুন্ঠ নাথ দেবব তিঃতিঃ। ২৫-অপৰপক্ষীয় শ্রাদ্ধ আৰু তৰ্পণাৰন্ত। আচার্য্য বিনোবা ভাৱেব স্মৃতি দিৱস।২৭-বৰপথাৰ ৰত্নাকৰ সত্ৰত ভীমকান্তি দেবী গোস্বামীৰ তিঃতিঃ। ২৯-মহাপুৰুষ শ্রীশ্রী 'মাধৱদেবৰ তিৰোভার তিথি উপলক্ষে ৰঙিয়াৰ লেচাকনীয়া সত্ৰ আৰু কামৰূপৰ দক্ষিণপাৰ পূব মাজিৰগাঁও শিলগোটা সত্ৰত কীৰ্ত্তন মহোৎসব। ৩০-ঠাকুৰ অনুকুল চন্দ্ৰৰ আবির্ভার দিৱস।৩১-জিতাষ্টমী ব্রত। সন্ধ্যা শ্রীশ্রীজীমূতবাহন পূজা। সন্ধিয়া শ্রীশ্রীসত্যনাবায়ন ব্রত। শ্রীশ্রী বিশ্বকর্মা পূজা আৰু অবন্ধন। দৰং জিলাৰ দেওমৰনৈ বড়িগাৱঁ, খটৰা, মৌৰা - আৰু সীতাৰা সত্ৰত পচতী উৎসৱ।

ববিশুদ্ধি-মিথুন, তুলা, বৃশ্চিক, আৰু মীনৰাশিৰ
      </li>
    </ul>

  </>
  )
}
