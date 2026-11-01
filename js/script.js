'use strict';

/* =========================================================
   1. CONFIG
========================================================= */

const config = {
  phone: '+996 507 44 25 53',
  phoneHref: 'tel:+996507442553',

  instagramName: '@pool_rsk',
  instagramUrl: 'https://www.instagram.com/pool_rsk',

  rating: 4.8,
  ratingsCount: 205,

  twoGisUrl:
    'https://2gis.kg/bishkek/firm/70000001115038326/74.668406%2C42.878568',

  twoGisReviewsUrl:
    'https://2gis.kg/bishkek/firm/70000001115038326/74.668406%2C42.878568/tab/reviews'
};


/* =========================================================
   2. TRANSLATIONS
========================================================= */

const translations = {
  ru: {
    logo_name: 'РСК им. Шералы Сыдыкова',
    logo_subtitle: 'Бассейн',

    nav_home: 'Главная',
    nav_about: 'О бассейне',
    nav_prices: 'Цены',
    nav_formats: 'Тренировки',
    nav_gallery: 'Галерея',
    nav_reviews: 'Отзывы',
    nav_contacts: 'Контакты',

    btn_contact: 'Связаться',
    btn_prices: 'Посмотреть цены',
    btn_call: 'Позвонить',

    hero_location: 'Бишкек, Кыргызстан',
    hero_title: 'Плавание начинается здесь',
    hero_subtitle: 'Бассейн Республиканского спортивного колледжа им. Шералы Сыдыкова',
    hero_desc: 'Тренировки для детей и взрослых, групповые и персональные занятия с тренером, а также самостоятельное плавание.',

    stat_rating: 'рейтинг в 2ГИС',
    stat_reviews: 'оценок',
    stat_ages: 'Дети и взрослые',
    stat_ages_desc: 'занятия для всех',
    stat_formats: 'С тренером / без',
    stat_formats_desc: 'разные форматы',

    about_eyebrow: 'О бассейне',
    about_title: 'Место для тренировок, прогресса и спорта',
    about_text: 'Бассейн Республиканского спортивного колледжа им. Шералы Сыдыкова — спортивный объект для тренировок, занятий с тренером и самостоятельного плавания.',
    about_image_alt: 'Здание Республиканского спортивного колледжа им. Шералы Сыдыкова',

    prices_eyebrow: 'Цены',
    prices_title: 'Прозрачные тарифы',
    prices_lead: 'Выберите подходящий формат занятий.',
    prices_note: 'Самостоятельное плавание — строго с 14 лет',
    prices_footer: 'Актуальную стоимость и условия уточняйте по телефону.',
    tab_without: 'Самостоятельно',
    tab_with: 'С тренером',

    formats_eyebrow: 'Форматы тренировок',
    formats_title: 'Как можно заниматься',
    format_1_title: 'Самостоятельное плавание',
    format_1_text: 'Для посетителей от 14 лет, которые хотят тренироваться самостоятельно.',
    format_2_title: 'Групповые занятия',
    format_2_text: 'Тренировки в группе под руководством тренера.',
    format_3_title: 'Персональные занятия',
    format_3_text: 'Индивидуальная работа с тренером с акцентом на технику.',

    why_eyebrow: 'Преимущества',
    why_title: 'Почему выбирают нас',

    gallery_eyebrow: 'Галерея',
    gallery_title: 'Наш бассейн',
    gallery_lead: 'Посмотрите, где проходят тренировки',

    reviews_eyebrow: 'Отзывы',
    reviews_title: 'Что говорят посетители',
    reviews_lead: 'Рейтинг посетителей в 2ГИС',
    reviews_count: 'оценок',
    reviews_note: 'По данным 2ГИС',
    reviews_btn: 'Посмотреть отзывы в 2ГИС',

    cta_title: 'Готовы выйти на дорожку?',
    cta_desc: 'Узнайте актуальное расписание и доступные группы по телефону или в Instagram.',

    contacts_eyebrow: 'Контакты',
    contacts_title: 'Свяжитесь с нами',
    contacts_text: 'Расписание, свободные места и условия занятий можно уточнить напрямую.',
    contacts_address: 'Бишкек, ул. Кольбаева, 33',
    contacts_phone: 'Телефон',
    contacts_inst_btn: 'Написать',
    contacts_map: 'Карта',
    contacts_map_text: 'Посмотреть расположение',
    contacts_map_btn: 'Открыть в 2ГИС',

    footer_name: 'Республиканский спортивный колледж им. Шералы Сыдыкова',
    footer_text: 'Бассейн для тренировок, занятий с тренером и самостоятельного плавания.',
    footer_navigation: 'Навигация',
    footer_contacts: 'Контакты',
    footer_short: 'РСК им. Шералы Сыдыкова',
    footer_rights: 'Все права защищены.',
    footer_top: 'Наверх ↑',

    currency: 'сом',

    category_child: 'Детский',
    category_adult: 'Взрослый',
    visits_8: '8 занятий',
    visits_12: '12 занятий',
    single_visit: 'Разовый визит',
    single_lesson: 'Разовое занятие',
    best_value: 'Выгодно',

    group_independent: 'Абонементы на самостоятельное плавание',
    group_independent_single: 'Разовое самостоятельное посещение',
    group_training: 'Групповые занятия',
    group_training_single: 'Разовое групповое занятие',
    group_personal: 'Персональные занятия',
    group_personal_single: 'Разовое персональное занятие',

    rating_aria: rating => `Рейтинг ${rating} из 5`
  },

  ky: {
    logo_name: 'Шералы Сыдыков атындагы РСК',
    logo_subtitle: 'Бассейн',

    nav_home: 'Башкы бет',
    nav_about: 'Бассейн жөнүндө',
    nav_prices: 'Баалар',
    nav_formats: 'Машыгуулар',
    nav_gallery: 'Галерея',
    nav_reviews: 'Сын-пикирлер',
    nav_contacts: 'Байланыштар',

    btn_contact: 'Байланышуу',
    btn_prices: 'Бааларды көрүү',
    btn_call: 'Чалуу',

    hero_location: 'Бишкек, Кыргызстан',
    hero_title: 'Сүзүү ушул жерден башталат',
    hero_subtitle: 'Шералы Сыдыков атындагы Республикалык спорттук колледждин бассейни',
    hero_desc: 'Балдар жана чоңдор үчүн машыгуулар, топтук жана жеке сабактар, ошондой эле өз алдынча сүзүү.',

    stat_rating: '2ГИС рейтинги',
    stat_reviews: 'баалоо',
    stat_ages: 'Балдар жана чоңдор',
    stat_ages_desc: 'баары үчүн',
    stat_formats: 'Тренер менен / жок',
    stat_formats_desc: 'ар кандай форматтар',

    about_eyebrow: 'Бассейн жөнүндө',
    about_title: 'Машыгуу, өнүгүү жана спорт үчүн жай',
    about_text: 'Шералы Сыдыков атындагы Республикалык спорттук колледждин бассейни — машыгуу, тренер менен иштөө жана өз алдынча сүзүү үчүн спорттук объект.',
    about_image_alt: 'Шералы Сыдыков атындагы Республикалык спорттук колледждин имараты',

    prices_eyebrow: 'Баалар',
    prices_title: 'Түшүнүктүү тарифтер',
    prices_lead: 'Өзүңүзгө ылайыктуу машыгуу форматын тандаңыз.',
    prices_note: 'Өз алдынча сүзүү — 14 жаштан баштап гана',
    prices_footer: 'Так бааны жана шарттарды телефон аркылуу тактаңыз.',
    tab_without: 'Өз алдынча',
    tab_with: 'Тренер менен',

    formats_eyebrow: 'Машыгуу форматтары',
    formats_title: 'Кантип машыгууга болот',
    format_1_title: 'Өз алдынча сүзүү',
    format_1_text: '14 жаштан жогору өз алдынча машыгууну каалагандар үчүн.',
    format_2_title: 'Топтук машыгуулар',
    format_2_text: 'Тренердин жетекчилиги астында топ менен машыгуу.',
    format_3_title: 'Жеке машыгуулар',
    format_3_text: 'Техникага басым жасоо менен тренер менен жеке иштөө.',

    why_eyebrow: 'Артыкчылыктар',
    why_title: 'Эмне үчүн бизди тандашат',

    gallery_eyebrow: 'Галерея',
    gallery_title: 'Биздин бассейн',
    gallery_lead: 'Машыгуулар кайда өтөөрүн көрүңүз',

    reviews_eyebrow: 'Сын-пикирлер',
    reviews_title: 'Келүүчүлөрдүн пикири',
    reviews_lead: '2ГИС боюнча рейтинг',
    reviews_count: 'баалоо',
    reviews_note: '2ГИС маалыматы боюнча',
    reviews_btn: '2ГИС сын-пикирлерин көрүү',

    cta_title: 'Сүзүүгө даярсызбы?',
    cta_desc: 'Учурдагы графикти жана бош топторду телефон же Instagram аркылуу билиңиз.',

    contacts_eyebrow: 'Байланыштар',
    contacts_title: 'Биз менен байланышыңыз',
    contacts_text: 'Графикти, бош орундарды жана шарттарды түз байланышып тактасаңыз болот.',
    contacts_address: 'Бишкек, Кольбаев көч., 33',
    contacts_phone: 'Телефон',
    contacts_inst_btn: 'Жазуу',
    contacts_map: 'Карта',
    contacts_map_text: 'Жайгашкан жерди көрүү',
    contacts_map_btn: '2ГИСте ачуу',

    footer_name: 'Шералы Сыдыков атындагы Республикалык спорттук колледж',
    footer_text: 'Машыгуу, тренер менен сабак жана өз алдынча сүзүү үчүн бассейн.',
    footer_navigation: 'Навигация',
    footer_contacts: 'Байланыштар',
    footer_short: 'Шералы Сыдыков атындагы РСК',
    footer_rights: 'Бардык укуктар корголгон.',
    footer_top: 'Жогору ↑',

    currency: 'сом',

    category_child: 'Балдар',
    category_adult: 'Чоңдор',
    visits_8: '8 сабак',
    visits_12: '12 сабак',
    single_visit: 'Бир жолку келүү',
    single_lesson: 'Бир жолку сабак',
    best_value: 'Пайдалуу',

    group_independent: 'Өз алдынча сүзүүгө абонементтер',
    group_independent_single: 'Бир жолку өз алдынча сүзүү',
    group_training: 'Топтук машыгуулар',
    group_training_single: 'Бир жолку топтук сабак',
    group_personal: 'Жеке машыгуулар',
    group_personal_single: 'Бир жолку жеке сабак',

    rating_aria: rating => `5 баллдын ичинен ${rating} рейтинг`
  },

  en: {
    logo_name: 'S. Sydykov RSC',
    logo_subtitle: 'Swimming Pool',

    nav_home: 'Home',
    nav_about: 'About',
    nav_prices: 'Prices',
    nav_formats: 'Training',
    nav_gallery: 'Gallery',
    nav_reviews: 'Reviews',
    nav_contacts: 'Contacts',

    btn_contact: 'Contact us',
    btn_prices: 'View prices',
    btn_call: 'Call',

    hero_location: 'Bishkek, Kyrgyzstan',
    hero_title: 'Swimming starts here',
    hero_subtitle: 'Swimming pool of the Republican Sports College named after Sheraly Sydykov',
    hero_desc: 'Training for children and adults, group and personal coaching, as well as independent swimming.',

    stat_rating: '2GIS rating',
    stat_reviews: 'reviews',
    stat_ages: 'Kids & Adults',
    stat_ages_desc: 'classes for everyone',
    stat_formats: 'Coach / Independent',
    stat_formats_desc: 'multiple formats',

    about_eyebrow: 'About',
    about_title: 'A place for training, progress and sport',
    about_text: 'The swimming pool of the Republican Sports College is a sports facility for training, coaching and independent swimming.',
    about_image_alt: 'Republican Sports College named after Sheraly Sydykov',

    prices_eyebrow: 'Prices',
    prices_title: 'Clear pricing',
    prices_lead: 'Choose the training format that suits you.',
    prices_note: 'Independent swimming is available from age 14',
    prices_footer: 'Please contact us to confirm current prices and conditions.',
    tab_without: 'Independent',
    tab_with: 'With coach',

    formats_eyebrow: 'Training formats',
    formats_title: 'Ways to train',
    format_1_title: 'Independent swimming',
    format_1_text: 'For visitors aged 14+ who want to train independently.',
    format_2_title: 'Group training',
    format_2_text: 'Group sessions under the guidance of a coach.',
    format_3_title: 'Personal training',
    format_3_text: 'Individual coaching with focus on technique.',

    why_eyebrow: 'Advantages',
    why_title: 'Why choose us',

    gallery_eyebrow: 'Gallery',
    gallery_title: 'Our pool',
    gallery_lead: 'See where training takes place',

    reviews_eyebrow: 'Reviews',
    reviews_title: 'What visitors say',
    reviews_lead: 'Visitor rating on 2GIS',
    reviews_count: 'reviews',
    reviews_note: 'According to 2GIS',
    reviews_btn: 'View reviews on 2GIS',

    cta_title: 'Ready to get in the pool?',
    cta_desc: 'Find out the current schedule and available groups by phone or Instagram.',

    contacts_eyebrow: 'Contacts',
    contacts_title: 'Get in touch',
    contacts_text: 'Contact us directly for schedules, availability and training conditions.',
    contacts_address: '33 Kolbaev St., Bishkek',
    contacts_phone: 'Phone',
    contacts_inst_btn: 'Message',
    contacts_map: 'Map',
    contacts_map_text: 'View location',
    contacts_map_btn: 'Open in 2GIS',

    footer_name: 'Republican Sports College named after Sheraly Sydykov',
    footer_text: 'Swimming pool for training, coaching and independent swimming.',
    footer_navigation: 'Navigation',
    footer_contacts: 'Contacts',
    footer_short: 'S. Sydykov RSC',
    footer_rights: 'All rights reserved.',
    footer_top: 'Back to top ↑',

    currency: 'KGS',

    category_child: 'Children',
    category_adult: 'Adults',
    visits_8: '8 sessions',
    visits_12: '12 sessions',
    single_visit: 'Single visit',
    single_lesson: 'Single session',
    best_value: 'Best value',

    group_independent: 'Independent swimming memberships',
    group_independent_single: 'Single independent visit',
    group_training: 'Group training',
    group_training_single: 'Single group session',
    group_personal: 'Personal training',
    group_personal_single: 'Single personal session',

    rating_aria: rating => `Rating ${rating} out of 5`
  }
};


/* =========================================================
   3. DATA
   Цены хранятся только здесь — не дублируются по языкам.
========================================================= */

const prices = {
  without: [
    {
      title: 'group_independent',
      cards: [
        { title: 'visits_8', category: 'category_child', price: 1800 },
        { title: 'visits_12', category: 'category_adult', price: 2200 }
      ]
    },
    {
      title: 'group_independent_single',
      cards: [
        { title: 'single_visit', category: 'category_child', price: 200 },
        { title: 'single_visit', category: 'category_adult', price: 250 }
      ]
    }
  ],

  with: [
    {
      title: 'group_training',
      cards: [
        { title: 'visits_8', category: 'category_child', price: 2600 },
        { title: 'visits_12', category: 'category_child', price: 3700 },
        { title: 'visits_8', category: 'category_adult', price: 3000 }
      ]
    },
    {
      title: 'group_training_single',
      cards: [
        { title: 'single_lesson', category: 'category_child', price: 350 },
        { title: 'single_lesson', category: 'category_adult', price: 400 }
      ]
    },
    {
      title: 'group_personal',
      cards: [
        { title: 'visits_8', category: 'category_child', price: 3800 },
        { title: 'visits_12', category: 'category_child', price: 5500, badge: true },
        { title: 'visits_8', category: 'category_adult', price: 4700 },
        { title: 'visits_12', category: 'category_adult', price: 6800, badge: true }
      ]
    },
    {
      title: 'group_personal_single',
      cards: [
        { title: 'single_lesson', category: 'category_child', price: 500 },
        { title: 'single_lesson', category: 'category_adult', price: 600 }
      ]
    }
  ]
};


const advantages = {
  ru: [
    'Занятия для детей',
    'Занятия для взрослых',
    'Тренировки с тренером',
    'Групповые занятия',
    'Персональные занятия',
    'Самостоятельное плавание'
  ],

  ky: [
    'Балдар үчүн машыгуу',
    'Чоңдор үчүн машыгуу',
    'Тренер менен машыгуу',
    'Топтук сабактар',
    'Жеке сабактар',
    'Өз алдынча сүзүү'
  ],

  en: [
    'Classes for children',
    'Classes for adults',
    'Coached training',
    'Group sessions',
    'Personal sessions',
    'Independent swimming'
  ]
};


const whyCards = {
  ru: [
    ['Тренировки с тренером', 'Доступны групповые и персональные форматы занятий.'],
    ['Для детей и взрослых', 'Можно подобрать формат занятий для разного возраста.'],
    ['Персональный формат', 'Индивидуальная работа с тренером и внимание к технике.'],
    ['Абонементы', 'Доступны разные варианты для регулярных занятий.'],
    ['Спортивная атмосфера', 'Бассейн расположен на территории спортивного колледжа.'],
    ['Несколько форматов', 'Самостоятельное, групповое или персональное плавание.']
  ],

  ky: [
    ['Тренер менен машыгуу', 'Топтук жана жеке машыгуу форматтары бар.'],
    ['Балдар жана чоңдор үчүн', 'Ар кандай жаш куракка ылайыктуу форматты тандоого болот.'],
    ['Жеке формат', 'Тренер менен жекече иштөө жана техникага көңүл буруу.'],
    ['Абонементтер', 'Үзгүлтүксүз машыгуу үчүн ар кандай варианттар бар.'],
    ['Спорттук атмосфера', 'Бассейн спорттук колледждин аймагында жайгашкан.'],
    ['Бир нече формат', 'Өз алдынча, топтук же жеке сүзүү.']
  ],

  en: [
    ['Coached training', 'Group and individual training formats are available.'],
    ['Kids and adults', 'Choose a suitable format for different ages.'],
    ['Personal coaching', 'Individual work with attention to swimming technique.'],
    ['Memberships', 'Several options are available for regular training.'],
    ['Sports environment', 'The pool is located at a sports college.'],
    ['Flexible formats', 'Independent, group or personal swimming.']
  ]
};


const gallery = [
  {
    src: 'images/pool-1.jpg',
    width: 900,
    height: 1150,
    captions: {
      ru: 'Общий вид бассейна',
      ky: 'Бассейндин жалпы көрүнүшү',
      en: 'General view of the pool'
    }
  },
  {
    src: 'images/pool-2.jpg',
    width: 900,
    height: 1150,
    captions: {
      ru: 'Стартовые тумбы',
      ky: 'Старттык тумбалар',
      en: 'Starting blocks'
    }
  },
  {
    src: 'images/building.jpg',
    width: 1000,
    height: 1250,
    captions: {
      ru: 'Фасад здания колледжа',
      ky: 'Колледждин имараты',
      en: 'College building'
    }
  },
  {
    src: 'images/photo_5420301620534255990_y.jpg',
    width: 900,
    height: 1150,
    captions: {
      ru: 'Занятия с тренером',
      ky: 'Тренер менен машыгуу',
      en: 'Training with a coach'
    }
  },
  {
    src: 'images/photo_5420301620534255991_y.jpg',
    width: 900,
    height: 1150,
    captions: {
      ru: 'Детские тренировки',
      ky: 'Балдардын машыгуусу',
      en: 'Kids training'
    }
  },
  {
    src: 'images/photo_5420301620534255993_y.jpg',
    width: 900,
    height: 1150,
    captions: {
      ru: 'Плавательные дорожки',
      ky: 'Сүзүү жолдору',
      en: 'Swimming lanes'
    }
  }
];


/* =========================================================
   4. STATE / HELPERS
========================================================= */

const supportedLanguages = ['ru', 'ky', 'en'];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let currentLanguage = getSavedLanguage();
let lightboxIndex = 0;


function getSavedLanguage() {
  try {
    const saved = localStorage.getItem('pool-language');
    return supportedLanguages.includes(saved) ? saved : 'ru';
  } catch {
    return 'ru';
  }
}


function saveLanguage(language) {
  try {
    localStorage.setItem('pool-language', language);
  } catch {
    // localStorage может быть недоступен.
  }
}


function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;

  return element;
}


function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.ru[key] ?? key;
}


function formatNumber(value) {
  const locale = currentLanguage === 'ky'
    ? 'ky-KG'
    : currentLanguage === 'en'
      ? 'en-US'
      : 'ru-RU';

  return new Intl.NumberFormat(locale).format(value);
}


/* =========================================================
   5. SITE CONFIG
========================================================= */

function applyConfig() {
  document.querySelectorAll('[data-phone]').forEach(element => {
    element.textContent = config.phone;
  });

  document.querySelectorAll('[data-phone-link]').forEach(element => {
    element.href = config.phoneHref;
  });

  document.querySelectorAll('[data-instagram-name]').forEach(element => {
    element.textContent = config.instagramName;
  });

  document.querySelectorAll('[data-instagram-link]').forEach(element => {
    element.href = config.instagramUrl;
  });

  document.querySelectorAll('[data-rating]').forEach(element => {
    element.textContent = config.rating.toFixed(1);
  });

  document.querySelectorAll('[data-rating-count]').forEach(element => {
    element.textContent = formatNumber(config.ratingsCount);
  });

  document.querySelectorAll('[data-rating-stars]').forEach(element => {
    element.setAttribute(
      'aria-label',
      translations[currentLanguage].rating_aria(config.rating.toFixed(1))
    );
  });
}


/* =========================================================
   6. I18N
========================================================= */

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    const value = t(key);

    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = t(element.dataset.i18nAlt);
  });

  document.querySelectorAll('.lang-btn').forEach(button => {
    const active = button.dataset.lang === currentLanguage;

    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  renderAdvantages();
  renderWhyCards();
  renderPrices();
  renderGallery();
  applyConfig();
}


function setLanguage(language) {
  if (!supportedLanguages.includes(language)) return;

  currentLanguage = language;
  saveLanguage(language);
  applyTranslations();
}


/* =========================================================
   7. DYNAMIC COMPONENTS
========================================================= */

function renderAdvantages() {
  const container = document.getElementById('advantagesList');
  if (!container) return;

  const items = advantages[currentLanguage].map(text => {
    return createElement('li', '', text);
  });

  container.replaceChildren(...items);
}


function renderWhyCards() {
  const container = document.getElementById('whyGrid');
  if (!container) return;

  const cards = whyCards[currentLanguage].map(([title, text]) => {
    const article = createElement('article', 'why-card reveal is-visible');

    article.append(
      createElement('h3', '', title),
      createElement('p', '', text)
    );

    return article;
  });

  container.replaceChildren(...cards);
}


function createPriceCard(data) {
  const card = createElement('article', 'price-card');

  if (data.badge) {
    card.append(
      createElement('span', 'price-card__badge', t('best_value'))
    );
  }

  const title = createElement('h4', '', t(data.title));

  const price = createElement('p', 'price-card__price');
  const amount = createElement('span', '', formatNumber(data.price));
  const currency = createElement('small', '', t('currency'));

  price.append(amount, currency);

  const category = createElement(
    'p',
    'price-card__category',
    t(data.category)
  );

  const button = createElement(
    'a',
    'btn btn--outline',
    t('btn_contact')
  );

  button.href = '#contacts';
  button.dataset.scroll = '';

  card.append(title, price, category, button);

  return card;
}


function createPriceGroup(group) {
  const wrapper = createElement('div', 'price-group');
  const title = createElement(
    'h3',
    'price-group__title',
    t(group.title)
  );

  const cards = createElement('div', 'price-cards');
  cards.append(...group.cards.map(createPriceCard));

  wrapper.append(title, cards);

  return wrapper;
}


function renderPrices() {
  const withoutContainer = document.getElementById('pricesWithout');
  const withContainer = document.getElementById('pricesWith');

  if (withoutContainer) {
    withoutContainer.replaceChildren(
      ...prices.without.map(createPriceGroup)
    );
  }

  if (withContainer) {
    withContainer.replaceChildren(
      ...prices.with.map(createPriceGroup)
    );
  }
}


function createGalleryItem(item, index) {
  const caption = item.captions[currentLanguage];

  const link = createElement('a', 'gallery__item reveal is-visible');
  link.href = item.src;
  link.dataset.lightboxIndex = String(index);
  link.setAttribute('aria-label', caption);

  const image = createElement('img', 'gallery__image');
  image.src = item.src;
  image.alt = caption;
  image.width = item.width;
  image.height = item.height;
  image.loading = 'lazy';
  image.decoding = 'async';

  const captionElement = createElement(
    'span',
    'gallery__caption',
    caption
  );

  link.append(image, captionElement);

  return link;
}


function renderGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  container.replaceChildren(
    ...gallery.map(createGalleryItem)
  );
}


/* =========================================================
   8. MOBILE MENU
========================================================= */

function initializeMobileMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('mainNav');

  if (!burger || !nav) return;


  const closeMenu = () => {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');

    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
  };


  burger.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');

    nav.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);

    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute(
      'aria-label',
      open ? 'Закрыть меню' : 'Открыть меню'
    );
  });


  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });


  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });


  window.addEventListener('resize', () => {
    if (window.innerWidth > 1050) closeMenu();
  });
}


/* =========================================================
   9. PRICE TABS
========================================================= */

function initializePriceTabs() {
  const tabs = [...document.querySelectorAll('[data-price-tab]')];

  if (!tabs.length) return;


  function selectTab(tab) {
    const name = tab.dataset.priceTab;

    tabs.forEach(button => {
      const active = button === tab;

      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });

    document.getElementById('panel-without').hidden = name !== 'without';
    document.getElementById('panel-with').hidden = name !== 'with';
  }


  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));

    tab.addEventListener('keydown', event => {
      let nextIndex;

      if (event.key === 'ArrowRight') {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === 'ArrowLeft') {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === 'Home') {
        nextIndex = 0;
      } else if (event.key === 'End') {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();

      tabs[nextIndex].focus();
      selectTab(tabs[nextIndex]);
    });
  });


  document.addEventListener('click', event => {
    const link = event.target.closest('[data-open-tab]');
    if (!link) return;

    const tab = tabs.find(
      item => item.dataset.priceTab === link.dataset.openTab
    );

    if (tab) selectTab(tab);
  });
}


/* =========================================================
   10. SMOOTH SCROLL
========================================================= */

function initializeSmoothScroll() {
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-scroll]');
    if (!link) return;

    const id = link.getAttribute('href');

    if (!id?.startsWith('#') || id === '#') return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
      block: 'start'
    });
  });
}


/* =========================================================
   11. HEADER + ACTIVE NAV
========================================================= */

function initializeHeader() {
  const header = document.getElementById('header');

  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  updateHeader();

  window.addEventListener('scroll', updateHeader, {
    passive: true
  });
}


function initializeActiveNavigation() {
  const sections = document.querySelectorAll('[data-observe]');
  const navLinks = document.querySelectorAll('[data-section]');

  if (!sections.length || !navLinks.length) return;


  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const id = visible.target.id;

    navLinks.forEach(link => {
      const active = link.dataset.section === id;

      link.classList.toggle('is-active', active);

      if (active) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, {
    rootMargin: '-30% 0px -55%',
    threshold: [0, 0.2, 0.5, 1]
  });


  sections.forEach(section => observer.observe(section));
}


/* =========================================================
   12. REVEAL ANIMATIONS
========================================================= */

function initializeRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('is-visible'));
    return;
  }


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12
  });


  elements.forEach(element => observer.observe(element));
}


/* =========================================================
   13. LIGHTBOX
========================================================= */

function initializeLightbox() {
  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  if (!dialog || !image || !caption) return;


  function updateLightbox() {
    const item = gallery[lightboxIndex];
    if (!item) return;

    const text = item.captions[currentLanguage];

    image.src = item.src;
    image.alt = text;
    caption.textContent = text;
  }


  function openLightbox(index) {
    if (!gallery[index]) return;

    lightboxIndex = index;
    updateLightbox();

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }

    document.body.classList.add('modal-open');

    dialog
      .querySelector('[data-lightbox-close]')
      ?.focus();
  }


  function closeLightbox() {
    if (dialog.open && typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }

    document.body.classList.remove('modal-open');
  }


  function move(direction) {
    lightboxIndex =
      (lightboxIndex + direction + gallery.length) % gallery.length;

    updateLightbox();
  }


  document.getElementById('galleryGrid')?.addEventListener(
    'click',
    event => {
      const item = event.target.closest('[data-lightbox-index]');
      if (!item) return;

      event.preventDefault();

      openLightbox(
        Number(item.dataset.lightboxIndex)
      );
    }
  );


  dialog
    .querySelector('[data-lightbox-close]')
    ?.addEventListener('click', closeLightbox);


  dialog
    .querySelector('[data-lightbox-prev]')
    ?.addEventListener('click', () => move(-1));


  dialog
    .querySelector('[data-lightbox-next]')
    ?.addEventListener('click', () => move(1));


  dialog.addEventListener('click', event => {
    if (event.target === dialog) closeLightbox();
  });


  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeLightbox();
  });


  document.addEventListener('keydown', event => {
    if (!dialog.open) return;

    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });


  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
  });
}


/* =========================================================
   14. LANGUAGE SWITCHER
========================================================= */

function initializeLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });
}


/* =========================================================
   15. CURRENT YEAR
========================================================= */

function updateYear() {
  const year = document.getElementById('currentYear');

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}


/* =========================================================
   16. INIT
========================================================= */

function initializeSite() {
  applyConfig();
  applyTranslations();

  initializeMobileMenu();
  initializePriceTabs();
  initializeSmoothScroll();
  initializeHeader();
  initializeActiveNavigation();
  initializeRevealAnimations();
  initializeLightbox();
  initializeLanguageSwitcher();

  updateYear();
}


document.addEventListener('DOMContentLoaded', initializeSite);