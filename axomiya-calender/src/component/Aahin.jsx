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
    <div>
                <div>
     

     <div className="month">
       <ul>
         <li className="prev">&#10094;</li>
         <li className="next">&#10095;</li>
         <li>
           বহাগ (April-May)<br />
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


    <ul>
        <li>
            ১-৪২ৰ শ্বহীদ বলোবাম সূত, তিলক ডেকা, আৰু নগাঁও ঝুমপুৰত শ্বহীদ সোঁৱৰণ দিৱস।২-নবম্যাদি কল্পাৰম্ভো দেব্যা বোধনঞ্চ । গোমোঠা মহাৰা সত্ৰৰ তাৰক চন্দ্ৰ গোস্বামী, বিৰুবাৰীৰ প্রফুল্ল কুমাৰ শৰ্ম্মা আৰু শুকদ'ল বৰুবড়ি শলণ্ডৰী সত্ৰৰ প্ৰাঞ্জল বৰাৰ তিঃতিঃ।৩-বৰপেটা ধামত চতুর্ভূজ দেব মিশ্রৰ তিঃতিঃ। উৰিয়া গাৱঁত শহীদ ভোগেশ্বৰী ফুকননী দিবস পালন। শ্বহীদ কনকলতা বকরা আৰু মুকুন্দ কাকতিৰ স্মৃতি দিৱস ।৪-আখেৰি চাহাৰ চুম্বা।৫-নগাঁও নবোরা বালিসত্ৰ আৰু ৰূপনগৰত মৃনালীনি গোস্বামীনিব তিঃতিঃ।৮-বিষ্ণু বালিকুছি সন্ত্রত অজ্ঞানন্দ দেব আৰু দবামবা গজলা সত্রব ঠানুচন্দ্র মহন্তৰ তিঃতিঃ। ভবেন্দ্র নাবায়ন দত্তবৰুৱাৰ তিঃতিঃ ৫৮-মহালয়া পার্ব্বন শ্রাদ্ধ। বাঘমবা বজালবাবি সত্ৰৰ প্ৰতিষ্ঠাপক সত্ৰাধিকাৰ প্রভু নাৰায়ণ চন্দ্র দের গোস্বামী, ধোপাবৰ সত্ৰত লবকান্ত আতাব ডিঃতিজ্ঞ। আজিৰ পৰা ৯ অক্টোববলৈ 'চৰখা জয়ন্তী পালন ৯ নবৰাত্রিক ব্ৰতাৰম্ভ ১১০ নলবাৰীৰ ৭ পণ্ডিত হংসমল্ল বৰুৱাৰ তিঃতিঃ ।১১-গোলাঘাট মধুমিশ্র সত্রত মথুৰা গোস্বামী, উত্তৰ কমলাবাৰী সত্ৰত মুহীকান্ত গোস্বামী আৰু ৰতনপুৰ বৰকলীয়া সত্ৰৰ সত্ৰাধিকাৰ বাবুলা নাথ গোস্বামীৰ তিঃতিঃ ।১৪-দেবীর যষ্ঠ্যাদি কল্পারম্ভ। দুর্গাষষ্ঠী। সন্ধিয়া দেবীৰ আমন্ত্রণাধিবাস। শুকদ'ল বৰবড়ি শলগুৰী সত্ৰৰ গায়ণ চুটি কোচৰ তিঃতিঃ ।১৫-শ্রীশ্রী দুর্গাপূজা। দেবীৰ নবপত্রিকা প্রবেশ, স্থাপন আৰু সপ্তম্যাদি কল্পাৰম্ভ আৰু সপ্তম্যাদি কল্পাৰম্ভ আৰু সপ্তমী বিহিত পূজাবস্তু। দেবীৰ গজে আগমন। ফলং-গঞ্জে চ জলদা দেবীশস্যপূর্ণা বসুন্ধৰা। দেবীৰ অৰ্দ্ধৰাত্রিবিহিত পূজা। মহামানব মহাত্মা গান্ধীৰ জন্ম দিবস। ১৬-মহাষ্টম্যাদি কল্পারম্ভ, কেবল মহাষ্টমী কল্পাৰম্ভ আৰু মহাষ্টমী বিহিত পূজা প্রশস্তা। দিঘ ৪।১৪।১২ যোৱাত সদ্ধিপূজাৰম্ভ। দিঘ ৪।৩৮।১২ যোৱাত বলিদান। দিঘ ৫।২।১২ ৰ ভিতৰত সন্ধিপূজা সমাপন। বীৰাষ্টমী ব্রত। মহাষ্টমীর উপবাস।। সাধুপুরুষ বামপদ মহন্ত, মানাকুছি (হাজো)ক ৬ বাপুজী সনাতন আশ্রমত "গীতা সমাবোহ"। কালশিলা সত্ৰাধিকাৰ অনন্ত আতাৰ তিঃতিঃ।১৭-মহানবমী কল্পাৰম্ভ -আৰু মহানবমী পূজা প্রশস্তা। বৰদোরা সত্রব নিআনন্দ গোস্বামীৰ অিতিঃ ।১৮-দশমী বিহিত পূজা সমাপন আক দেবীৰ বিসর্জন। কুলাচাবানুসাবে বিসর্জনৰ শেষত অপবাজিতা পূজা। দেবীৰ নাওঁত গমন। ফলং নৌকায়াং শস্যবৃদ্ধিস্তথাজলম। বিজয়া দশমী কৃত্য। গোস্বামী মতে শ্ৰীশ্ৰীৰামচন্দ্ৰৰ বিজয়োৎসব। মহাপুৰুষ শ্রীশ্রীশঙ্কৰদেরব আবির্ভার তিথি। গোৱালপাৰা চহৰৰ শঙ্কৰ মঠত ৭ দিনীয়া ব্যাপি অখণ্ড পালনাম, মহাজনপাবা পলাশৰ তল সত্ৰৰ সভা পশ্চিম মায়ং অঞ্চল, বঙিয়াৰ লেচাকনীয়া সত্রত, বালাপেটাত শম্ভবদেৱৰ জন্মোৎসৱ পালন। ১ বিষ্ণুবালিকুছি সত্ৰৰ ভজনানন্দ গোস্বামীৰ তিঃতিঃ। নতুন শম্ভবাব্দ বছৰ ৫৭৪ আৰম্ভ।২০-সুন্দবদিয়া কেকান জয়সাগৰ আৰু তাপা আদিত দীননাথ দেব অধিকাৰীৰ তিথি।২২-সন্ধিয়া শ্রীশ্রীলক্ষ্মী পুজা আক শ্রীশ্রীসত্যনাবায়ণ ব্রত। বাতি কোজাগব কৃত্য। নাবিকল সহিত চিবা ভক্ষণ। অক্ষক্রীড়া। কাৱৈমাৰী ভালুকডবা মৈৰামাৰা চুলিয়াকটা, নলবাৰীৰ পকোৱা গাঁও, বজালীব নিস্তানন্দত ৫ দিনীয়া, মাজৰগাওঁ, বিজলী ঢেকীয়াবাৰী পশ্চিম মায়ং আদি ঠাইত লক্ষীপূজা সমাৰোহ। বাক্সাজিলাৰ কুছিজাৰা গাওঁত তিনিদিন ব্যাপি সভা মহোৎসর। বদলা সত্রত হেমকান্ত গোস্বামী আৰু বৰপথাৰ ৰত্নাকৰ সরত ভূবন চন্দ্র দেব গোস্বামীৰ তিঃতিঃ। বাল্মীকি পূর্ণিমা। কাৱৈমাৰী ভালুকডবা মৈৰামাৰা চুলিয়াকটা, বজালীৰ নিত্যানন্দত ৫ দিনীয়া, মাজৰগাওঁ, বিজনী ঢেকীয়াবাৰী পশ্চিম মায়ং আদি ঠাইত লক্ষীপূজা সমাৰোহ। বাক্সাজিলাৰ কুছিজাবা গাওঁ আৰু তামুলপুৰ বটীয়ামাৰীত তিনিদিন ব্যাপি সভা মহোৎসর। মিলাদ উন নবি বা ইদ-ই-মিলাদ, ফাতেহা দোৱাজদাহাম। ২৩- শ্রবনী সত্রত কুঞ্জলতা মহন্ত আৰু ধিং চমুৱাগাঁৱৰ অউনিআটী সত্ৰৰ গুণমাই ৰজাৰ তিঃতিঃ। চকলাঘাট ২। খৌৰামোচৰ সত্ৰৰ সত্ৰাধিকাৰ দুগ্ধচন্দ্র দের গোস্বামীৰ জন্ম জয়ন্তী। ২৪-চেঙা ভট্টবাবা সেবাশ্রমত অখণ্ড নাম - কীর্তন। ২৫ শৰণীয়া কথাবী উন্নয়ন পৰিষদৰ প্রতিষ্ঠা দিৱস। ২৬-বৰপেটা সত্ৰৰ প্ৰথম সত্ৰাধিকাৰ মথুৰা দাস বুঢ়া আতাব তিঃতিঃ উপলক্ষে অভয়াপুৰীৰ ধৰ্মপুৰ সত্ৰত কৰভাব সভা। বৰএলেভি সত্ৰৰ লক্ষীকান্ত মহন্ত আক বালিচাপৰী বৰএলেডি সরব ভদ্রকান্ত মহন্ত ডেকা অধিকাৰব তিঃতিঃ । ২৭-ধলৰ সত্ৰত অধিকাৰ পূর্ণচন্দ্ৰ গোস্বামীৰ ■তিঃতিঃ। ইদ-ই-মৌলাদ।২৯-আউনীআটীয়া সত্রাধিকার বিষ্ণুচন্দ্র দেব গোস্বামী আৰু বাৰাংহাটী বৰবৰী সত্ৰৰ বৈকুন্ঠ নাথ গোস্বামীব তিঃতিঃ ।৩১-সন্ধিয়া শ্রীশ্রীসত্যনাৰায়ণ ব্রত। কাতি বিহু। মঙ্গলদৈ দেবানন্দ, সত্রত-দধিমন্থন উৎসব। বৰপেটা বিলবতাবীহাটী বাখাল ঘৰত পালনাম।
        </li>
    </ul>

    </div>
  )
}
