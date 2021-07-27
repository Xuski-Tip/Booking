import {SET_TYPE} from "../../simpleJs/jurnalType";
import axios from "axios";
import {API} from "../../simpleJs/loginApi";

export function set_state(data) {
    return {
        type: SET_TYPE,
        payload: data
    }
}

export function jurnal(dispatch) {
    axios.get(API + "magazine")
        .then((res) => {
            console.log(res);
            console.log("Salom");
            dispatch(set_state({jurnal: res.data.magazine}))
        })
}