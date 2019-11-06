import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../assets/i18n/locales/en';
import fr from '../assets/i18n/locales/fr';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: ['en', 'fr'],
    fallbackLng: 'en',
    defaultNS: 'translations',
    fallbackNS: 'translations',
    saveMissing: true,
    saveMissingTo: 'all',
    resources: {
      en,
      fr
    },
    debug: true,
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br']
    }
  });

export default i18n;
