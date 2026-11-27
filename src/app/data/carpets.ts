export interface Carpet {
  id: number;
  slug: string;
  name: string;
  englishName: string;
  region: string;
  category: string;
  description: string;
  poeticNote: string;
  image: string;
  gallery: string[];
  dimensions: string;
  materials: string;
  colors: string;
  knotDensity: string;
  featured: boolean;
  available: boolean;
}

export interface ExhibitionSlide {
  id: number;
  numeral: string;
  kicker: string;
  title: string;
  subtitle: string;
  caption: string;
  image: string;
}

export interface WeavingChapter {
  id: string;
  numeral: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
  figureCaption: string;
}

export interface WeavingSchool {
  name: string;
  en: string;
  image: string;
  text: string;
  character: string;
}

export const EXHIBITION_SLIDES: ExhibitionSlide[] = [
  {
    id: 1,
    numeral: '۰۱',
    kicker: 'تار و پودِ سکوت',
    title: 'آغاز در سکوتِ دار',
    subtitle: 'پیش از آن‌که نقشی بر زمین بیفتد، در صبرِ دست‌های بافنده جان می‌گیرد.',
    caption: 'کارگاه قالی‌بافی · لحظهٔ گره‌زنی بر دارِ چوبی',
    image: '/images/weaving-loom-hands.jpg',
  },
  {
    id: 2,
    numeral: '۰۲',
    kicker: 'رنگ از دلِ خاک و گیاه',
    title: 'طلایِ زعفران، سایهٔ گردو',
    subtitle: 'کلاف‌های ابریشم و پشمِ دست‌ریس در رنگرزیِ طبیعی و نورِ آرامِ صبح نفس می‌کشند.',
    caption: 'کلاف‌های ابریشم و پشم · رنگرزی گیاهی اصیل',
    image: '/images/botanical-silk-skeins.jpg',
  },
  {
    id: 3,
    numeral: '۰۳',
    kicker: 'هندسهٔ باغِ ایرانی',
    title: 'ترنجی در میانِ زمان',
    subtitle: 'هر اسلیمی و شاخهٔ گل، نقشه‌ای از آرامش و توازنِ جهان در مقیاسِ خانه است.',
    caption: 'نگارهٔ تاریخی · توازنِ ترنج و لچک',
    image: '/images/15378-1-desktop.jpg',
  },
  {
    id: 4,
    numeral: '۰۴',
    kicker: 'ردِ امضا بر حاشیه',
    title: 'کتیبهٔ دست‌های ماندگار',
    subtitle: 'استادکاران سده‌های پیشین، نام و زمانِ خویش را در میانِ گره‌ها جاودانه کردند.',
    caption: 'جزئیات کتیبهٔ بافت · میراث کارگاه‌های ایران',
    image: '/images/15378-5-desktop.jpg',
  },
  {
    id: 5,
    numeral: '۰۵',
    kicker: 'تالارِ تماشا',
    title: 'هنرِ زیستن با قالی',
    subtitle: 'در سکوتِ معماری معاصر، قالی نه پوششِ کف، که تابلوی زندهٔ هنر است.',
    caption: 'تالار نمایشگاه گالری ماه · آثار منتخب ابریشم',
    image: '/images/gallery-hall-carpets.jpg',
  },
];

export const WEAVING_CHAPTERS: WeavingChapter[] = [
  {
    id: 'fibers',
    numeral: '۰۱',
    title: 'ابریشم و پشمِ زنده',
    summary: 'گزینش الیافی که با لمسِ نور و گذرِ سال‌ها نرم‌تر و درخشان‌تر می‌شوند.',
    detail:
      'رشته‌های باریک ابریشم و پشمِ دست‌ریس، پیش از نشستن بر دار، شسته و تابیده می‌شوند تا لطافت و استحکام را هم‌زمان در خود نگه دارند.',
    image: '/images/botanical-silk-skeins.jpg',
    figureCaption: 'نگاره ۱ — کلاف‌های رنگ‌شده با زعفران، پوست گردو و گل‌های خشک بر سنگِ گرم.',
  },
  {
    id: 'knots',
    numeral: '۰۲',
    title: 'گره؛ ضربانِ دستِ بافنده',
    summary: 'هر گره نامتقارن یا متقارن، لحظه‌ای از حضور و تپشِ قلبِ استادکار است.',
    detail:
      'بر دارِ چوبی، میان چله‌کشی و پودکشیِ منظم، هزاران گره کنار هم می‌نشینند؛ جایی که دقت هندسی با روحِ شاعرانهٔ بافنده درهم می‌آمیزد.',
    image: '/images/weaving-loom-hands.jpg',
    figureCaption: 'نگاره ۲ — دست‌های بافنده در هنگام بستنِ گره‌ها بر چلهٔ ابریشمی.',
  },
  {
    id: 'patina',
    numeral: '۰۳',
    title: 'بافت و پرداختِ نهایی',
    summary: 'نمایشگاهِ جزئیاتی که تنها در سکوت و فاصلهٔ نزدیک آشکار می‌شوند.',
    detail:
      'پس از پایان دار، پرداخت و شست‌وشوی آرام با آبِ خالص، رنگ‌ها را با هم آشتی می‌دهد و درخششِ مخملیِ کرم و طلا را بیدار می‌کند.',
    image: '/images/15378-6-primary.webp.jpeg',
    figureCaption: 'نگاره ۳ — نمای نزدیک از تراکم گره‌ها، گردش اسلیمی و پختگی رنگ‌ها.',
  },
];

export const CARPETS: Carpet[] = [
  {
    id: 1,
    slug: 'ravayat-tabriz',
    name: 'روایتِ تبریز',
    englishName: 'TABRIZ MONOGRAPH · 01',
    region: 'تبریز',
    category: 'تبریز',
    description: 'اسلیمی‌های ظریف و ختایی‌های درهم‌تنیده با ریتمی شاعرانه و تراکمِ بالا.',
    poeticNote: 'در مکتب تبریز، خطوط چون قلم‌گیریِ مینیاتور بر تار و پودِ ابریشم می‌لغزند و نور را به نرمی بازتاب می‌دهند.',
    image: '/images/15378-6-primary.webp.jpeg',
    gallery: ['/images/15378-6-primary.webp.jpeg'],
    dimensions: '۲۰۰ × ۳۰۰ سانتی‌متر (نمونه نمایشگاهی)',
    materials: 'چله ابریشم، پرز کرک و ابریشم',
    colors: 'لاجوردی، کرمِ عاجی، طلاییِ کهنه',
    knotDensity: '۶۰ رج · گره متقارن',
    featured: true,
    available: false,
  },
  {
    id: 2,
    slug: 'naghsh-heriz',
    name: 'هندسهٔ هریس',
    englishName: 'HERIZ GEOMETRY · 02',
    region: 'هریس',
    category: 'هریس',
    description: 'خطوط شکستهٔ مقتدر و ترنجِ استوارِ کوهستانی با روحی بی‌پروا و اصیل.',
    poeticNote: 'قالی هریس بدون نقشهٔ کاغذیِ مرسوم، از حافظهٔ تاریخی و هندسهٔ درونیِ بافنده جان می‌گیرد.',
    image: '/images/b-70-17c.jpeg',
    gallery: ['/images/b-70-17c.jpeg'],
    dimensions: '۲۵۰ × ۳۵۰ سانتی‌متر (نمونه نمایشگاهی)',
    materials: 'پشمِ دست‌ریس و تارِ پنبه‌ای',
    colors: 'روناسی، کرمِ گرم، اُخرایی، سرمه‌ای',
    knotDensity: 'بافتِ درشت‌بافت و ماندگار',
    featured: true,
    available: false,
  },
  {
    id: 3,
    slug: 'yad-ardabil',
    name: 'یادِ اردبیل',
    englishName: 'ARDABIL HERITAGE · 03',
    region: 'اردبیل',
    category: 'اردبیل',
    description: 'الهام از ترنجِ شانزده‌پر و قندیل‌های آسمانی در اوجِ توازنِ صفوی.',
    poeticNote: 'درخششِ طلاییِ مرکز در محاصرهٔ زمینه‌ای آرام، یادآور گنبدها و آسمانِ پرستارهٔ شب‌های کویر و کوهستان است.',
    image: '/images/15378-1-desktop.jpg',
    gallery: ['/images/15378-1-desktop.jpg'],
    dimensions: '۳۰۰ × ۴۰۰ سانتی‌متر (نمونه نمایشگاهی)',
    materials: 'ابریشم و پشمِ ظریفِ دست‌ریس',
    colors: 'سرمه‌ایِ عمیق، طلاییِ زعفرانی، عاجی',
    knotDensity: 'بافت ریزِ موزهٔ صفوی',
    featured: true,
    available: false,
  },
  {
    id: 4,
    slug: 'sokoot-sarab',
    name: 'سکوتِ سراب',
    englishName: 'SARAB STILLNESS · 04',
    region: 'سراب',
    category: 'سراب',
    description: 'رنگ‌های شتری و کرمِ خاکی با نقوشِ تکرارشونده‌ای آرام و بی‌تکلف.',
    poeticNote: 'سادگی و خلوصِ رنگ در سراب، فضا را به سکوتی گرم دعوت می‌کند؛ جایی که زمین و الیاف هم‌رنگ می‌شوند.',
    image: '/images/download (4).jpg',
    gallery: ['/images/download (4).jpg'],
    dimensions: '۱۵۰ × ۲۵۰ سانتی‌متر (نمونه نمایشگاهی)',
    materials: 'پشمِ طبیعیِ خودرنگ شتر و گوسفند',
    colors: 'کرم، عسلی، قهوه‌ایِ گردویی',
    knotDensity: 'بافت سنتیِ متعادل',
    featured: true,
    available: false,
  },
  {
    id: 5,
    slug: 'khak-azarbaijan',
    name: 'خاک و نورِ آذربایجان',
    englishName: 'AZERBAIJAN STUDY · 05',
    region: 'آذربایجان',
    category: 'آذربایجان',
    description: 'گفت‌وگوی رنگ‌های پختهٔ بومی با معماریِ آرام و نورِ طبیعیِ خانه.',
    poeticNote: 'نقش‌های آذربایجان خاطرهٔ دشت‌ها و باغ‌های شمال‌غرب ایران را در قالبی شاعرانه و جاودانه روایت می‌کنند.',
    image: '/images/Flare Aspect Bordeaux Rug.jpg',
    gallery: ['/images/Flare Aspect Bordeaux Rug.jpg'],
    dimensions: '۲۰۰ × ۳۰۰ سانتی‌متر (نمونه نمایشگاهی)',
    materials: 'پشمِ مرغوب با رنگرزیِ گیاهی',
    colors: 'عنابیِ پخته، کرمِ شامپاینی، خاکی',
    knotDensity: '۴۵ رج · گره ترکی',
    featured: false,
    available: false,
  },
  {
    id: 6,
    slug: 'talar-ghom',
    name: 'ابریشمِ تالار',
    englishName: 'SILK SALON · 06',
    region: 'تبریز',
    category: 'تبریز',
    description: 'تابلویی از ابریشمِ کرم و طلایی که با تغییرِ زاویهٔ نور، چهره‌ای تازه می‌نماید.',
    poeticNote: 'بازیِ نور بر خوابِ ابریشم، هر ساعتِ روز را به نمایشی تازه از سایه و درخشش بدل می‌کند.',
    image: '/images/gallery-hall-carpets.jpg',
    gallery: ['/images/gallery-hall-carpets.jpg'],
    dimensions: '۲۲۰ × ۳۲۰ سانتی‌متر (نمونه نمایشگاهی)',
    materials: 'تمام‌ابریشمِ طبیعی',
    colors: 'کرمِ صدفی، طلاییِ مات، قهوه‌ایِ سوخته',
    knotDensity: '۷۰ رج · ابریشمِ دست‌بافت',
    featured: false,
    available: false,
  },
];

export const CATEGORIES: WeavingSchool[] = [
  {
    name: 'تبریز',
    en: 'TABRIZ SCHOOL',
    image: '/images/15378-5-desktop.jpg',
    text: 'ظرافت قلم‌گیریِ مینیاتوری و هماهنگی شاعرانهٔ ترنج و اسلیمی',
    character: 'ابریشم و کرک · رج‌شمار بالا · توازنِ کلاسیک',
  },
  {
    name: 'هریس',
    en: 'HERIZ SCHOOL',
    image: '/images/b-70-17c.jpeg',
    text: 'هندسهٔ بی‌واسطه، ترنج‌های شکسته و استحکامِ برخاسته از کوهستان',
    character: 'ذهنی‌بافیِ اصیل · پشمِ دست‌ریس · خطوط مقتدر',
  },
  {
    name: 'اردبیل',
    en: 'ARDABIL SCHOOL',
    image: '/images/download (3).jpg',
    text: 'ردِ خاطره در نقوشِ قدسی، قندیل‌ها و شکوهِ تاریخیِ صفویه',
    character: 'الهام از تالارهای تاریخی · عمقِ رنگ و آرامش',
  },
  {
    name: 'سراب',
    en: 'SARAB SCHOOL',
    image: '/images/download (4).jpg',
    text: 'رنگ‌های خودرنگِ پشم، حاشیه‌های آرام و خلوصِ نزدیک به طبیعت',
    character: 'تونالیته‌های کرم و عسلی · ریتمِ هندسیِ آرام',
  },
  {
    name: 'آذربایجان',
    en: 'AZERBAIJAN HERITAGE',
    image: '/images/download (6).jpg',
    text: 'سرزمینِ روایت‌های بافته‌شده؛ پیوندِ رنگ‌های گیاهی و خاطرهٔ جمعی',
    character: 'تنوع نقوشِ بومی · رنگرزیِ اصیلِ گیاهی',
  },
];

export const SOCIAL_LINKS = {
  instagram: '',
  whatsapp: '',
  telegram: '',
  phone: '+989123456789',
};