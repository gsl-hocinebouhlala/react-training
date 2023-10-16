import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations as resources } from "./translations";

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // French by default.

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
