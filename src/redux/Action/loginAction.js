import axios from "axios";
import { REGISTR_API} from "../../simpleJs/loginApi";
import {toast} from "react-toastify";

export function login(events, error, value, history) {
    return function (dispatch) {
        axios.post(REGISTR_API, value)
            .then((res) => {
                console.log("salom");
                console.log(res);
                dispatch({type: ""});
                history.push("/")
                toast.success('Ты запустил ура')
            })
            .catch((error) => {
                toast.error('Error')
            })
    }
}