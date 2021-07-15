import axios from "axios";
import { REGISTR_API, TOKEN_LOCAL } from "../../simpleJs/loginApi";
import {toast} from "react-toastify"

export function login(events, error, values, history) {
    return function (dispatch) {
        axios.post(REGISTR_API, values)
            .then((res) => {
                console.log("salom");
                console.log(res)
                history.push("/")
            })
    }
}