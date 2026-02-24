export const languages = {
  en: 'English',
  mn: 'Монгол'
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'home.title': 'Welcome to Our Company',
    'home.subtitle': 'Building excellence through innovation',
    'about.title': 'About Us',
    'about.description': 'We are a team of passionate professionals dedicated to delivering exceptional results.',
    'services.title': 'Our Services',
    'portfolio.title': 'Portfolio',
    'contact.title': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you! Your message has been sent successfully.',
    'contact.error': 'Oops! Something went wrong. Please try again.',
  },
  mn: {
    'nav.home': 'Нүүр',
    'nav.about': 'Бидний тухай',
    'nav.services': 'Үйлчилгээ',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Холбоо барих',
    'home.title': 'Манай компанид тавтай морил',
    'home.subtitle': 'Инновацаар дамжуулан шилдэг байдлыг бий болгох',
    'about.title': 'Бидний тухай',
    'about.description': 'Бид онцгой үр дүнд хүрэхийг зорьсон хүсэл эрмэлзэлтэй мэргэжилтнүүдийн баг юм.',
    'services.title': 'Манай үйлчилгээ',
    'portfolio.title': 'Портфолио',
    'contact.title': 'Холбоо барих',
    'contact.name': 'Нэр',
    'contact.email': 'Имэйл',
    'contact.message': 'Мессеж',
    'contact.send': 'Мессеж илгээх',
    'contact.sending': 'Илгээж байна...',
    'contact.success': 'Баярлалаа! Таны мессеж амжилттай илгээгдлээ.',
    'contact.error': 'Алдаа гарлаа! Дахин оролдоно уу.',
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
