import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from './locales/en/translation';
import { jp } from './locales/jp/translation';

const resources = {
  en: en,
  jp: jp
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "jp",

    keySeparator: false,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
