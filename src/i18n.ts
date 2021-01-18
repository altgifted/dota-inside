import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next/hooks';
import commonEN from './assets/locales/common/en.json';
import commonRU from './assets/locales/common/ru.json';

const resources = {
  en: {
    common: commonEN
  },
  ru: {
    common: commonRU
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  // @ts-ignore
  .use(initReactI18next)
  .init({
    ns: ['common'],
    defaultNS: 'common',
    nsSeparator: ':',
    debug: process.env.NODE_ENV === 'development',
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
