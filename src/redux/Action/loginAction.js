import axios from "axios";
import { REGISTR_API, TOKEN_LOCAL } from "../../simpleJs/loginApi";
import {toast} from "react-toastify";

export function login(events, error, value, history) {
    return function (dispatch) {
        // axios.post(REGISTR_API, value)
        //     .then((res) => {
        //         console.log("salom");
        //         console.log(res);
        //         // localStorage.setItem(TOKEN_LOCAL, res.data.token);
        //         dispatch({type: ""});
        //         // localStorage.setItem(TOKEN_LOCAL, res.data.token)
        //         // console.log(res.data.token);
        //         console.log("res.data.token");
        //         history.push("/");
        //         toast.success('Ты запустил ура')
        //     })
        //     .catch((error) => {
        //         toast.error('Error error')
        //     })
        axios.post(REGISTR_API , value)
            .then((res)=>{
                console.log(res);


            })
        console.log(value)
    }
}