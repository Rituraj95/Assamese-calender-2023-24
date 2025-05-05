import { create } from 'zustand';

const useAharCalendarStore = create((set) => ({
    selectedDate: null,
    customDays: [
        { day: '', content: '', color: 'white' },
        { day: '', content: '', color: 'white' },
        { day: '', content: '', color: 'white' },
        { day: '', content: '', color: 'white' },
        { day: '', content: '', color: 'white' },
        { day: '', content: '', color: 'white' },
        { day: '১', content: 'august 19', color: 'white', details: 'নৱমাটি কাটনীপাৰ সত্ৰত যুগলনাথ আৰু চিদানন্দ দেৱৰ তিঃতিঃ।' },
        { day: '২', content: 'august 20', color: 'red', details: 'আহতগুৰি সত্ৰত লক্ষীকান্ত দেব, পুখুৰীপাৰ সত্ৰৰ সত্ৰাধিকাৰ যোগেশ্বৰ গোস্বামী দেৱ, প্রাক্তন সত্ৰাধিকাৰ কুশল চন্দ্ৰ অধিকাৰী, ধৰ্মপ্ৰাণা মহিলা পার্বতী দত্তবৰুৱাৰ তিঃতিঃ, লেটুগ্রাম সত্রত দেবানন্দ আতা, আৰু পুখুৰীপাৰ সত্ৰৰ সত্যবর্তী আইৰ তিঃতিঃ। জ্যোতিপ্ৰসাদ আগৰৱালৰ জন্মদিৱস।' },
        { day: '৩', content: 'august 21', color: 'white', details: '' },
        { day: '৪', content: 'august 22', color: 'white', details: 'কৰঙা লেটুগ্রাম সত্ৰত সত্ৰাধিকাৰ পূর্ণানন্দ মহন্তৰ তিঃতিঃ।' },
        { day: '৫', content: 'august 23', color: 'white', details: 'কলাগুৰু বিষ্ণুপ্ৰসাদ ৰাভাব স্মৃতি দিৱস।' },
        { day: '৬', content: 'august 24', color: 'white', details: 'পশ্চিম চামতাৰ নিৰঞ্জন শৰ্ম্মা, দৰং জিলাৰ দেওমৰনৈ বড়িগাঁৱৰ থানেশ্বৰ দেৱ শৰ্ম্মাৰ তিঃতিঃ।' },
        { day: '৭', content: 'august 25', color: 'white', details: 'বাঘ ৮।১৫।৩০ যোৱাত অম্বুবাচী প্রবৃত্তিঃ। মাঁ কামাখ্যা ধামত অম্বুবাচী মহামেলা আৰম্ভ। ঘণ্ডৱা (ডিগাক)ত মাল গোঁসাই পূজা।' },
        { day: '৮', content: 'august 26', color: 'white', details: 'ভাটৌকুছিৰ কেশব চৰণ আতা, আদিএলেঙিৰ ডেকা অধিকাৰ দেবেন্দ্র নাথ মহন্ত আৰু মবিগাঁও চটাবড়ি শিলডুবি সত্ৰৰ সত্ৰাধিকাৰ ঈশ্বৰ চন্দ্ৰ গোস্বামীৰ তিঃতিঃ।' },
        { day: '৯', content: 'august 27', color: 'red', details: 'বিষ্ণু বালিকুছি সত্রত মহোৎসব। পিপলিবাৰী বাইজৰ দ্বাৰা পাচদিনীয়া পালনাম মহোৎসব।' },
        { day: '১০', content: 'august 28', color: 'white', details: '' },
        { day: '১১', content: 'august 29', color: 'white', details: 'দিঘ ৮।৩০।১০ যোৱাত অম্বুবাচী নিবৃত্তিঃ। বিহিমপুৰ সত্ৰত মেবেলা আতাৰ শুকদ\'ল বৰবৰী শলগুৰী সত্ৰৰ ডেকা সত্ৰাধিকাৰ লক্ষীকান্ত মহন্তৰ তিঃতিঃ।' },
        { day: '১২', content: 'august 30', color: 'white', details: 'ধর্মাচার্য্য সিদ্ধিনাথ দেব অধিকাৰীৰ সুন্দৰীদিয়া, গুবাকুছি কেকান জয়সাগব বামুনবৰীত, অৰুণ প্রভা দেৱী আৰু বিহিমপুৰ সত্ৰত গোবিন্দ আতাৰ তিঃতিঃ।' },
        { day: '১৩', content: 'august 31', color: 'white', details: 'পাটিকাৰা গাঁৱৰ বিশিষ্ট সমাজকর্মী চাক চন্দ্র শর্ম্মাৰ তিঃতিঃ।' },
        { day: '১৪', content: 'sept 1', color: 'white', details: '' },
        { day: '১৫', content: 'sept 2', color: 'white', details: 'হুল দিৱস। ব্যাঙ্কৰ ষান্মাসিক হিচাব।' },
        { day: '১৬', content: 'sept 3', color: 'red', details: 'বথ দ্বিতীয়া, শ্রীশ্রীজগন্নাথ দেবৰ ৰথযাত্রা। বৰজুলি গাঁৱত গীতা নিকেতন উৎসর।' },
        { day: '১৭', content: 'sept 4', color: 'white', details: 'দিহিং সত্ৰত বৃন্দাবন আতাৰ তিঃতিঃ।' },
        { day: '১৮', content: 'sept 5', color: 'white', details: '' },
        { day: '১৯', content: 'sept 6', color: 'white', details: '' },
        { day: '২০', content: 'sept 7', color: 'white', details: 'আউনীআটি সত্ৰত সত্ৰাধিকাৰ হেমচন্দ্র গোস্বামীৰ তিঃতিঃ।' },
        { day: '২১', content: 'sept 8', color: 'white', details: 'রূপনাৰায়ণ খামোচীয়া সত্ৰত কৃষ্ণকান্ত অধিকাৰ, আউনীআটী সত্ৰত সত্ৰাধিকাৰ বিষ্ণুদের গোস্বামীব তিঃতিঃ।' },
        { day: '২২', content: 'sept 9', color: 'white', details: '' },
        { day: '২৩', content: 'sept 10', color: 'red', details: 'কপাহেবা আহঁতগুবী সত্ৰৰ ভুৱনচন্দ্র গোস্বামী আৰু বাংশবাৰী সত্ৰত নীলকণ্ঠ গোস্বামীৰ তিঃতিঃ।' },
        { day: '২৪', content: 'sept 11', color: 'white', details: 'স্মার্ত্ত মতে ও উৎকলমতে শ্রীশ্রীজগন্নাথ দেবব পূর্ণযাত্রা। বজালী ডুমুৰীয়া গীতা সত্ৰৰ প্ৰতিষ্ঠা দিৱস। নগৰীয়া সত্ৰত আদি পুৰুষ সনাতন আতা, বিহামপুৰ গাৱঁৰ পুষ্প কান্ত দেব শর্মা আৰু ধোপাবৰ নাচনীপাৰ হেমাবৰী কহুৱাতলি সত্ৰত ৰামকৃষ্ণ দেবৰ তিঃতিঃ।' },
        { day: '২৫', content: 'sept 12', color: 'white', details: 'বুদবাৰী সত্ৰৰ নাৰায়ণ কৃষ্ণ, বিজয় মাহাৰা সত্ৰৰ ভূবন চন্দ্র দেব সত্ৰাধিকাৰ গোস্বামী কমলাবাৰী সত্ৰত ভকত দাস আতা, পানীটেমা গাঁৱৰ সত্ৰাধিকাৰ থানুবাম কলিতাৰ তিঃতিঃ। ইদুজ্জোহা (বক্সিদ)।' },
        { day: '২৬', content: 'sept 13', color: 'white', details: 'কমলাবাৰী সত্রত লক্ষীকান্ত গোস্বামী, তাড়াবড়ি কালাশিলা সত্রত শুভকান্ত আতা, সৰু বাহজেডনী সত্ৰত ৰতীকান্ত দেব গোস্বামী, বিহামপুৰ (নলবাৰী) সত্ৰত বলদের গোস্বামীৰ আৰু খুদীয়া সত্ৰত \'লক্ষ্মী গোস্বামী, বংদৈ পটীয়ৰী সত্রত উমাকান্ত গোস্বামী, মাজুলী চামগুৰি সত্ৰৰ বংশী দাস আতাৰ তিঃতিঃ।' },
        { day: '২৭', content: 'sept 14', color: 'white', details: 'শিৱসাগৰ শিমলুগুৰিৰ কহিত চন্দ্র চাংকাকতি, আউনীআটী সত্রত লীলাকান্ত গোস্বামী, কুরুবাবাহী সত্রত যদুচন্দ্র গোস্বামী, নৰসিংহ এলেভি সত্ৰত গোবিন্দ দেব, সনাতন দেব আৰু বৰপথাৰ দিচিবগণ সত্ৰত হেমেশ্বৰ দেৱ গোস্বামীৰ তিঃতিঃ।' },
        { day: '২৮', content: 'sept 15', color: 'white', details: '' },
        { day: '২৯', content: 'sept 16', color: 'white', details: 'বৰপেটা ধামত বামতাবণ আতৈ, বৰপেটা সত্ৰত বলাই বুঢ়া আতাৰ তিঃতিঃ।' },
        { day: '৩০', content: 'sept 17', color: 'red', details: '' },
        { day: '৩১', content: 'august 18', color: 'white', details: 'সন্ধিয়া শ্রীশ্রীসত্যনাবায়ন ব্রত।' }
    ],

    setSelectedDate: (date) => set({ selectedDate: date }),
    clearSelectedDate: () => set({ selectedDate: null })
}));

export default useAharCalendarStore;