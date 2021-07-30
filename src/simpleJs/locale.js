import {LANGUAGE} from "./Tipelang";

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE);
};

getLanguage();