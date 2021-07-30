import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
const Languages = ['en', 'ru', 'uz', 'krill'];
i18n 
    .use(HttpBackend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        falbacking: "en",
        whitelist: Languages,
        debug: false,
        interpolation: {
            escapeValue: false,
        }
    })
export default i18n