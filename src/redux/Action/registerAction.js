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
                localStorage.setItem(TOKEN_LOCAL, res.data.token);
                localStorage.setItem("email", value.email)
                localStorage.setItem("password", value.password)
                history.push("/");
                toast.success("Muvaffaqiyatli !!!")
            })
            .catch((res) => {
                toast.error("Error")
            })

    }
}