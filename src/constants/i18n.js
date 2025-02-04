import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  reactI18nextModule
} from "react-i18next";

i18n
  .use(XHR)
  .use(LanguageDetector)
  // .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    fallbackLng: "en",
    debug: (process.env.STAGE !== "production"),

    ns: ["translations"],
    defaultNS: "translations",

    interpolation: {},
    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default"
    }
  });
export default i18n;
