import axios from "axios";
import {LOGIN, LOGIN_API} from "../../simpleJs/loginApi";
import {toast} from "react-toastify";

export function avtorizatsiya(events, error, value, history) {
    console.log(value);
    return function (dispatch) {
        console.log(value);
        axios.post(LOGIN_API, value)
            .then((res) => {
                console.log("salom");
                console.log(res);
                dispatch({type: ""});
                localStorage.setItem(LOGIN, res.data.token);
                history.push("/");
                toast.success("Muvaffaqiyatli !!!")
            })
            .catch((res) => {
                    toast.error("salom")
                }
            )
    }
}
