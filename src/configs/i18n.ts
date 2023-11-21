import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LOCAL_LANG_KEY } from '@/constants';
import { getLocalLanguage } from '@/utils/local';

import zh from '../assets/i18n/zh.json';
import en from '../assets/i18n/en.json';

const resources = {
  zh: {
    translation: zh,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocalLanguage(),
  fallbackLng: ['en', 'zh'],
  debug: false, // TODO
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(LOCAL_LANG_KEY, lng);
  document.documentElement.lang = lng;
});

export default i18n;