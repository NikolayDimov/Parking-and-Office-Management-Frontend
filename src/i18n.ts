import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationEN from './assets/locales/en/translation.json';
import translationDE from './assets/locales/de/translation.json';
import translationBG from './assets/locales/bg/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    de: {
        translation: translationDE,
    },
    bg: {
        translation: translationBG,
    },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
});

export default i18n;
