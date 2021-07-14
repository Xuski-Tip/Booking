import {LANGUAGE} from "../redux/languageType";

export const getLang = () => {
    return localStorage.getItem(LANGUAGE);
};