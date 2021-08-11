import axios from "axios";
import {REGISTR_API, TOKEN_LOCAL} from "../../simpleJs/loginApi";
import {toast} from "react-toastify";

export function login(events, error, value, history) {
    return function (dispatch) {
        axios.post(REGISTR_API, value)
            .then((res) => {
                console.log("salom");
                console.log(res);
                dispatch({type: ""});
                localStorage.setItem(TOKEN_LOCAL, "Bearer" + " " + res.data.token);
                history.push("/");
                toast.success("Muvaffaqiyatli !!!")
            })
            .catch((res) => {
                toast.error("Xatolik")
            })
        console.log(value)
    }
}