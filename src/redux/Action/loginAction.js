import axios from "axios";
import {LOGIN_API} from "../../simpleJs/loginApi";
import {toast} from "react-toastify";

export function avtorizatsiya(events, error, value, history) {
    return function (dispatch) {
        axios.post(LOGIN_API, value)
            .then((res) => {
                console.log("salom");
                console.log(res);
                dispatch({type: ""});
                // localStorage.setItem(TOKEN_LOCAL, res.data.token);
                history.push("/");
                toast.success("Muvaffaqiyatli !!!")
            })
            .catch((res) => {
                toast.error(res.message)
            })
    }
}
