import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./ru.json";
import uz from "./uz.json";

const resources = {
  ru: {
    translation: ru,
  },
  uz: {
    translation: uz,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
