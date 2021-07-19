import axios from 'axios';
import { SORT_FREE, SORT_MINUS, SORT_PAID, SORT_PLUS } from './types';
//! wait backend
// export function getMagazineCards() {
//     return async (dispatch) => {
//         try {

//         } catch (error) {

//         }
//     }
// }
export function sortPlus() {
    return {
        type: SORT_PLUS,
    };
}
export function sortMinus() {
    return {
        type: SORT_MINUS,
    };
}
export function sortFree() {
    return {
        type: SORT_FREE,
    };
}
export function sortPaid() {
    return {
        type: SORT_PAID,
    };
}
