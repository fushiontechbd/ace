export type Lang = "en" | "bn";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "bn", label: "বাংলা" },
  { code: "en", label: "English" },
];

type Country = {
  flag: string;
  country: string;
  currency: string;
  currencyName: string;
};

type Step = { title: string; text: string };
type FaqItem = { q: string; a: string };
type TrustItem = { label: string; note: string };

export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    countries: string;
    how: string;
    faq: string;
    download: string;
    downloadApp: string;
    menuOpen: string;
    menuClose: string;
    language: string;
  };
  logo: {
    badge: string;
    name: string;
    tagline: string;
  };
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    description: string;
    downloadCta: string;
    howCta: string;
    apkInfo: string;
    stats: { label: string; value: string }[];
  };
  trust: TrustItem[];
  countries: {
    eyebrow: string;
    title: string;
    description: string;
    sendTo: string;
    rateToday: string;
    indicative: string;
    list: Country[];
  };
  how: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Step[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    contactPrefix: string;
    contactSuffix: string;
    items: FaqItem[];
  };
  phone: {
    brand: string;
    youSend: string;
    recipientGets: string;
    rateLine: string;
    feeLine: string;
    recipientName: string;
    recipientNote: string;
    recent: string;
    methods: { label: string; color: string }[];
    instant: string;
    continueBtn: string;
    delivered: string;
    deliveredValue: string;
    bestRate: string;
    bestRateValue: string;
  };
  footer: {
    about: string;
    contactLabel: string;
    helpHeading: string;
    helpItems: { label: string; href: string }[];
    followHeading: string;
    socialLabels: string[];
    copyright: (year: number) => string;
    license: string;
  };
};

const en: Dict = {
  meta: {
    title: "Ace Money Transfer — Send remittance to Bangladesh, fast and safe",
    description:
      "Send money home to Bangladesh from Singapore, UAE, Saudi Arabia, Malaysia, Qatar, Kuwait, Oman, Bahrain, the UK and the USA. Best market rates, low fees, instant delivery to bKash, Nagad and bank accounts.",
  },
  nav: {
    countries: "Countries",
    how: "How it works",
    faq: "FAQ",
    download: "Download",
    downloadApp: "Get the app",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
  },
  logo: {
    badge: "A",
    name: "Ace Money Transfer",
    tagline: "Remittance",
  },
  hero: {
    badge: "For Bangladeshis abroad",
    titleBefore: "Send money home to ",
    titleHighlight: "Bangladesh",
    titleAfter: " with confidence",
    description:
      "The Ace Money Transfer app lets you transfer remittance to bKash, Nagad and bank accounts across Bangladesh in minutes — at the best market rate, with transparent low fees.",
    downloadCta: "Download the app",
    howCta: "How it works",
    apkInfo: "Android APK · 66 MB",
    stats: [
      { label: "Transfers", value: "2.4M+" },
      { label: "Avg. delivery", value: "< 5 min" },
      { label: "Countries", value: "10+" },
    ],
  },
  trust: [
    {
      label: "Best market rate",
      note: "Live mid-market pricing every minute.",
    },
    {
      label: "Licensed & regulated",
      note: "Authorised remittance provider in every country.",
    },
    {
      label: "Bank-grade security",
      note: "256-bit encryption and biometric login.",
    },
    {
      label: "24/7 Bangla support",
      note: "Help in English and বাংলা — anytime.",
    },
  ],
  countries: {
    eyebrow: "Supported corridors",
    title: "Send remittance to Bangladesh from these countries",
    description:
      "Wherever you live and work, Ace Money Transfer delivers your hard-earned money to family back home — at the best market rates and with full transparency on fees.",
    sendTo: "Send to bKash, Nagad and bank accounts.",
    rateToday: "Rate per 1",
    indicative:
      "Live mid-market rates plus a small markup. The exact rate is locked in the app at the time of transfer.",
    list: [
      { flag: "🇸🇬", country: "Singapore", currency: "SGD", currencyName: "Singapore Dollar" },
      { flag: "🇦🇪", country: "United Arab Emirates", currency: "AED", currencyName: "UAE Dirham" },
      { flag: "🇸🇦", country: "Saudi Arabia", currency: "SAR", currencyName: "Saudi Riyal" },
      { flag: "🇲🇾", country: "Malaysia", currency: "MYR", currencyName: "Malaysian Ringgit" },
      { flag: "🇶🇦", country: "Qatar", currency: "QAR", currencyName: "Qatari Riyal" },
      { flag: "🇰🇼", country: "Kuwait", currency: "KWD", currencyName: "Kuwaiti Dinar" },
      { flag: "🇴🇲", country: "Oman", currency: "OMR", currencyName: "Omani Rial" },
      { flag: "🇧🇭", country: "Bahrain", currency: "BHD", currencyName: "Bahraini Dinar" },
      { flag: "🇬🇧", country: "United Kingdom", currency: "GBP", currencyName: "British Pound" },
      { flag: "🇺🇸", country: "United States", currency: "USD", currencyName: "US Dollar" },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Send money to Bangladesh in four simple steps",
    description:
      "Built for the Bangladeshi diaspora — clear pricing, fast delivery, and a familiar experience in English and বাংলা.",
    steps: [
      {
        title: "Download the app",
        text: "Install Ace Money Transfer free on Android and open it in seconds — no Play Store wait, just a tap on the APK.",
      },
      {
        title: "Create your account",
        text: "Sign up with your phone number and verify your identity in minutes — no paperwork, no branch visits.",
      },
      {
        title: "Deposit your currency",
        text: "Top up your Ace Money Transfer wallet using PayNow, debit card, bank transfer or mobile wallet in your local currency.",
      },
      {
        title: "Send remittance home",
        text: "Pick bKash, Nagad or any Bangladeshi bank account and send. Most transfers complete in under 5 minutes.",
      },
    ],
    ctaTitle: "Download Ace Money Transfer today",
    ctaDescription:
      "Available on Android — start sending in minutes.",
    ctaButton: "Download APK",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Answers to common questions",
    contactPrefix: "Have something else to ask? Reach us at ",
    contactSuffix: ".",
    items: [
      {
        q: "What is Ace Money Transfer?",
        a: "Ace Money Transfer is a mobile app built for Bangladeshis living abroad to send remittance home safely, quickly and at the best market rates.",
      },
      {
        q: "Which countries can I send remittance from?",
        a: "Today you can send to Bangladesh from Singapore, the UAE, Saudi Arabia, Malaysia, Qatar, Kuwait, Oman, Bahrain, the United Kingdom and the United States. We are adding new corridors regularly.",
      },
      {
        q: "Where can the money be received in Bangladesh?",
        a: "Recipients can receive funds directly into bKash, Nagad and Rocket mobile wallets, or to any bank account at major Bangladeshi banks. You can also choose cash pickup at supported partner branches.",
      },
      {
        q: "How long does a transfer take?",
        a: "Most transfers complete in under 5 minutes. Bank deposits to some banks may take up to one business day depending on the receiving bank.",
      },
      {
        q: "What does it cost to send?",
        a: "Ace Money Transfer shows the live exchange rate and the fee transparently before you confirm a transfer. Fees start from less than 1 unit of your local currency, with no hidden charges.",
      },
      {
        q: "How do you keep my money safe?",
        a: "We are a licensed remittance provider in every country we operate in. Funds are held in segregated trust accounts and the app uses bank-grade encryption and biometric login.",
      },
      {
        q: "Can I send on someone else's behalf?",
        a: "Yes — once your own profile is verified, you can save multiple recipients in Bangladesh and send to them at any time.",
      },
      {
        q: "Can I schedule transfers in advance?",
        a: "Yes. You can lock in today's rate and schedule the transfer to be sent within the time window shown in the app.",
      },
    ],
  },
  phone: {
    brand: "Ace Money Transfer",
    youSend: "You send",
    recipientGets: "Recipient gets",
    rateLine: "Rate 1 SGD = ৳ 90.42",
    feeLine: "Fee SGD 0.99",
    recipientName: "Rahim Uddin",
    recipientNote: "bKash · 017• •••• 23",
    recent: "Recent",
    methods: [
      { label: "bKash", color: "bg-pink-500" },
      { label: "Nagad", color: "bg-orange-500" },
      { label: "Bank deposit", color: "bg-slate-700" },
    ],
    instant: "Instant",
    continueBtn: "Continue",
    delivered: "Delivered",
    deliveredValue: "in 2 minutes",
    bestRate: "Best rate",
    bestRateValue: "৳ 90.42 / SGD",
  },
  footer: {
    about:
      "Ace Money Transfer is built for the brothers and sisters of the Bangladeshi diaspora. Send remittance home with confidence — we are here with you, in every country you work.",
    contactLabel: "Contact: ",
    helpHeading: "Help",
    helpItems: [
      { label: "Refund policy", href: "/refund-policy" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms & conditions", href: "/terms" },
    ],
    followHeading: "Follow us",
    socialLabels: ["Facebook", "YouTube", "Instagram"],
    copyright: (year) =>
      `© ${year} Ace Money Transfer PTE. Ltd. All rights reserved.`,
    license:
      "Licensed remittance provider · Funds held in segregated trust accounts.",
  },
};

const bn: Dict = {
  meta: {
    title: "Ace Money Transfer — দ্রুত ও নিরাপদে বাংলাদেশে রেমিট্যান্স পাঠান",
    description:
      "সিঙ্গাপুর, সংযুক্ত আরব আমিরাত, সৌদি আরব, মালয়েশিয়া, কাতার, কুয়েত, ওমান, বাহরাইন, যুক্তরাজ্য ও যুক্তরাষ্ট্র থেকে দেশে টাকা পাঠান। বাজারের সেরা রেট, কম ফি এবং বিকাশ, নগদ ও ব্যাংক অ্যাকাউন্টে তাৎক্ষণিক ডেলিভারি।",
  },
  nav: {
    countries: "দেশসমূহ",
    how: "কীভাবে ব্যবহার করবেন",
    faq: "প্রশ্নোত্তর",
    download: "ডাউনলোড",
    downloadApp: "অ্যাপ ডাউনলোড করুন",
    menuOpen: "মেনু খুলুন",
    menuClose: "মেনু বন্ধ করুন",
    language: "ভাষা",
  },
  logo: {
    badge: "হ",
    name: "Ace Money Transfer",
    tagline: "রেমিট্যান্স",
  },
  hero: {
    badge: "প্রবাসী বাংলাদেশীদের জন্য",
    titleBefore: "আস্থার সাথে দেশে টাকা পাঠান ",
    titleHighlight: "বাংলাদেশে",
    titleAfter: "",
    description:
      "Ace Money Transfer অ্যাপের মাধ্যমে কয়েক সেকেন্ডেই বিকাশ, নগদ ও যেকোনো ব্যাংক অ্যাকাউন্টে রেমিট্যান্স পাঠান — সেরা রেটে।",
    downloadCta: "অ্যাপ ডাউনলোড করুন",
    howCta: "কীভাবে ব্যবহার করবেন",
    apkInfo: "Android APK · ৬৬ MB",
    stats: [
      { label: "মোট লেনদেন", value: "২৪ লক্ষ বার+" },
      { label: "গড় ডেলিভারি", value: "৫ সেকেন্ডেরও কম" },
      { label: "দেশ", value: "১০+" },
    ],
  },
  trust: [
    {
      label: "সেরা এক্সচেঞ্জ রেট",
      note: "প্রতি মিনিটে আপডেট হওয়া লাইভ মিড-মার্কেট রেট।",
    },
    {
      label: "লাইসেন্সপ্রাপ্ত ও নিয়ন্ত্রিত",
      note: "প্রতিটি দেশে অনুমোদিত রেমিট্যান্স প্রোভাইডার।",
    },
    {
      label: "ব্যাংক-গ্রেড নিরাপত্তা",
      note: "২৫৬-বিট এনক্রিপশন এবং বায়োমেট্রিক লগইন।",
    },
    {
      label: "২৪/৭ বাংলা সাপোর্ট",
      note: "বাংলা ও ইংরেজিতে সাহায্য — যেকোনো সময়।",
    },
  ],
  countries: {
    eyebrow: "সাপোর্টেড দেশসমূহ",
    title: "এই দেশগুলো থেকে বাংলাদেশে রেমিট্যান্স পাঠান",
    description:
      "আপনি যেখানেই থাকুন বা কাজ করুন, Ace Money Transfer আপনার কষ্টার্জিত টাকা দেশে পরিবারের কাছে পৌঁছে দেয় — সেরা রেটে এবং পূর্ণ স্বচ্ছতার সাথে।",
    sendTo: "বিকাশ, নগদ ও যেকোনো ব্যাংক অ্যাকাউন্টে পাঠান।",
    rateToday: "প্রতি ১",
    indicative:
      "লাইভ মিড-মার্কেট রেট। ট্রান্সফারের সময় অ্যাপে চূড়ান্ত রেট নিশ্চিত হয়।",
    list: [
      { flag: "🇸🇬", country: "সিঙ্গাপুর", currency: "SGD", currencyName: "সিঙ্গাপুর ডলার" },
      { flag: "🇦🇪", country: "সংযুক্ত আরব আমিরাত", currency: "AED", currencyName: "আমিরাতি দিরহাম" },
      { flag: "🇸🇦", country: "সৌদি আরব", currency: "SAR", currencyName: "সৌদি রিয়াল" },
      { flag: "🇲🇾", country: "মালয়েশিয়া", currency: "MYR", currencyName: "মালয়েশিয়ান রিঙ্গিত" },
      { flag: "🇶🇦", country: "কাতার", currency: "QAR", currencyName: "কাতারি রিয়াল" },
      { flag: "🇰🇼", country: "কুয়েত", currency: "KWD", currencyName: "কুয়েতি দিনার" },
      { flag: "🇴🇲", country: "ওমান", currency: "OMR", currencyName: "ওমানি রিয়াল" },
      { flag: "🇧🇭", country: "বাহরাইন", currency: "BHD", currencyName: "বাহরাইনি দিনার" },
      { flag: "🇬🇧", country: "যুক্তরাজ্য", currency: "GBP", currencyName: "ব্রিটিশ পাউন্ড" },
      { flag: "🇺🇸", country: "যুক্তরাষ্ট্র", currency: "USD", currencyName: "মার্কিন ডলার" },
    ],
  },
  how: {
    eyebrow: "কীভাবে ব্যবহার করবেন",
    title: "চারটি সহজ ধাপে বাংলাদেশে টাকা পাঠান",
    description:
      "প্রবাসী বাংলাদেশীদের জন্য তৈরি — স্বচ্ছ মূল্য, দ্রুত ডেলিভারি এবং বাংলা ও ইংরেজিতে পরিচিত অভিজ্ঞতা।",
    steps: [
      {
        title: "অ্যাপ ডাউনলোড করুন",
        text: "Android-এ বিনামূল্যে Ace Money Transfer ইনস্টল করুন — অপেক্ষা নয়, শুধু APK-তে এক ট্যাপ।",
      },
      {
        title: "অ্যাকাউন্ট তৈরি করুন",
        text: "আপনার ফোন নম্বর দিয়ে সাইন আপ করুন এবং কয়েক মিনিটেই পরিচয় ভেরিফাই করুন — কোনো কাগজপত্র বা ব্রাঞ্চে যাওয়ার ঝামেলা নেই।",
      },
      {
        title: "মুদ্রা জমা দিন",
        text: "PayNow, ডেবিট কার্ড, ব্যাংক ট্রান্সফার বা মোবাইল ওয়ালেট দিয়ে আপনার স্থানীয় মুদ্রায় Ace Money Transfer ওয়ালেট টপ-আপ করুন।",
      },
      {
        title: "রেমিট্যান্স পাঠান",
        text: "বিকাশ, নগদ বা যেকোনো বাংলাদেশী ব্যাংক অ্যাকাউন্ট বেছে নিয়ে পাঠিয়ে দিন। অধিকাংশ ট্রান্সফার ৫ মিনিটেরও কম সময়ে সম্পন্ন হয়।",
      },
    ],
    ctaTitle: "আজই Ace Money Transfer ডাউনলোড করুন",
    ctaDescription:
      "Android-এ পাওয়া যাচ্ছে — কয়েক মিনিটেই পাঠানো শুরু করুন।",
    ctaButton: "APK ডাউনলোড করুন",
  },
  faq: {
    eyebrow: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    title: "সাধারণ প্রশ্নের উত্তর",
    contactPrefix: "আরও কিছু জিজ্ঞাসা আছে? আমাদের সাথে যোগাযোগ করুন ",
    contactSuffix: "।",
    items: [
      {
        q: "Ace Money Transfer কী?",
        a: "Ace Money Transfer হলো প্রবাসী বাংলাদেশীদের জন্য তৈরি একটি মোবাইল অ্যাপ, যার মাধ্যমে আপনি নিরাপদে, দ্রুত এবং বাজারের সেরা রেটে দেশে রেমিট্যান্স পাঠাতে পারবেন।",
      },
      {
        q: "কোন কোন দেশ থেকে রেমিট্যান্স পাঠাতে পারব?",
        a: "বর্তমানে আপনি সিঙ্গাপুর, সংযুক্ত আরব আমিরাত, সৌদি আরব, মালয়েশিয়া, কাতার, কুয়েত, ওমান, বাহরাইন, যুক্তরাজ্য এবং যুক্তরাষ্ট্র থেকে বাংলাদেশে টাকা পাঠাতে পারবেন। আমরা নিয়মিত নতুন দেশ যুক্ত করছি।",
      },
      {
        q: "বাংলাদেশে টাকা কোথায় গ্রহণ করা যাবে?",
        a: "প্রাপকরা সরাসরি বিকাশ, নগদ ও রকেট মোবাইল ওয়ালেটে অথবা বাংলাদেশের যেকোনো বড় ব্যাংকের অ্যাকাউন্টে টাকা গ্রহণ করতে পারবেন। অনুমোদিত পার্টনার ব্রাঞ্চ থেকে ক্যাশ পিকআপের সুযোগও রয়েছে।",
      },
      {
        q: "একটি ট্রান্সফার সম্পন্ন হতে কত সময় লাগে?",
        a: "অধিকাংশ ট্রান্সফার ৫ সেকেন্ডেরও কম সময়ে সম্পন্ন হয়। কিছু ব্যাংকে ব্যাংক জমা সম্পন্ন হতে গ্রহীতা ব্যাংকের উপর নির্ভর করে এক কর্মদিবস পর্যন্ত সময় লাগতে পারে।",
      },
      {
        q: "টাকা পাঠাতে কত খরচ হয়?",
        a: "Ace Money Transfer ট্রান্সফার নিশ্চিত করার আগে লাইভ এক্সচেঞ্জ রেট স্বচ্ছভাবে দেখায়। কোনো লুকানো চার্জ নেই।",
      },
      {
        q: "আমার টাকা কীভাবে নিরাপদ রাখা হয়?",
        a: "আমরা যেসব দেশে কার্যক্রম পরিচালনা করি প্রতিটিতে আমরা একটি লাইসেন্সপ্রাপ্ত রেমিট্যান্স প্রোভাইডার। তহবিল আলাদা ট্রাস্ট অ্যাকাউন্টে সংরক্ষিত থাকে এবং অ্যাপটি ব্যাংক-গ্রেড এনক্রিপশন ও বায়োমেট্রিক লগইন ব্যবহার করে।",
      },
      {
        q: "অন্যের পক্ষ থেকে কি টাকা পাঠানো যাবে?",
        a: "হ্যাঁ — আপনার নিজের প্রোফাইল ভেরিফাই হলে, আপনি বাংলাদেশে যেকোনো সময় টাকা পাঠাতে পারবেন।",
      },
     
    ],
  },
  phone: {
    brand: "Ace Money Transfer",
    youSend: "আপনি পাঠাচ্ছেন",
    recipientGets: "প্রাপক পাবেন",
    rateLine: "রেট ১ SGD = ৳ ৯০.৪২",
    feeLine: "ফি SGD ০.৯৯",
    recipientName: "রহিম উদ্দিন",
    recipientNote: "বিকাশ · ০১৭• •••• ২৩",
    recent: "সাম্প্রতিক",
    methods: [
      { label: "বিকাশ", color: "bg-pink-500" },
      { label: "নগদ", color: "bg-orange-500" },
      { label: "ব্যাংক জমা", color: "bg-slate-700" },
    ],
    instant: "তাৎক্ষণিক",
    continueBtn: "পরবর্তী",
    delivered: "ডেলিভার্ড",
    deliveredValue: "২ মিনিটে",
    bestRate: "সেরা রেট",
    bestRateValue: "৳ ৯০.৪২ / SGD",
  },
  footer: {
    about:
      "Ace Money Transfer তৈরি করা হয়েছে প্রবাসী বাংলাদেশী ভাই-বোনদের জন্য। আস্থার সাথে দেশে রেমিট্যান্স পাঠান — আপনি যে দেশেই কাজ করুন না কেন, আমরা আপনার পাশে আছি।",
    contactLabel: "যোগাযোগ: ",
    helpHeading: "সাহায্য",
    helpItems: [
      { label: "রিফান্ড নীতি", href: "/refund-policy" },
      { label: "গোপনীয়তা নীতি", href: "/privacy-policy" },
      { label: "শর্তাবলী", href: "/terms" },
    ],
    followHeading: "আমাদের ফলো করুন",
    socialLabels: ["ফেসবুক", "ইউটিউব", "ইনস্টাগ্রাম"],
    copyright: (year) =>
      `© ${year} Ace Money Transfer PTE. Ltd. সর্বস্বত্ব সংরক্ষিত।`,
    license:
      "লাইসেন্সপ্রাপ্ত রেমিট্যান্স প্রোভাইডার · তহবিল আলাদা ট্রাস্ট অ্যাকাউন্টে সংরক্ষিত।",
  },
};

export const dictionaries: Record<Lang, Dict> = { en, bn };

export const defaultLang: Lang = "bn";
